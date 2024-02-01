import {getListData} from '../api/api';
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ThunkAction} from "redux-thunk";
import {DataType, InferActionsTypes} from "../types";
import {AppStateType} from "./store";

const initialState = {
    isInitialized: false as boolean,
    dataList: [] as Array<DataType>
}

const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        toggleIsInitialized(state, action) {
            state.isInitialized = action.payload;
        },
        setListData(state, action) {
            state.dataList = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(initializeApp.fulfilled, (state, action) => {
                state.isInitialized = true;
                state.dataList = action.payload;
            })
    }
})

const {actions, reducer} = appSlice;

export const initializeApp = createAsyncThunk(
    'app/initializeApp',
    async () => await getListData());


type ActionsTypes = InferActionsTypes<typeof actions>;
export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>;

export default reducer;
