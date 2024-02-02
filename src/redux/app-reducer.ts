import {getListData} from '../api/api';
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ThunkAction} from "redux-thunk";
import {DataType, InferActionsTypes} from "../types";
import {AppStateType} from "./store";
import {getExistedTextFieldName} from "../helpers/utils";

const initialState = {
    isInitialized: false as boolean,
    dataList: [] as Array<DataType>,
    searchedStr: ""
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
        },
        setSearchedStr(state, action) {
            state.searchedStr = action.payload;
        },
        setNewTextFieldValue(state, action) {

            state.dataList = state.dataList.map(e => {
                if (e.id == action.payload.id) {
                    let existedTextFieldName = getExistedTextFieldName(e);
                    e[existedTextFieldName] = action.payload.newValue;
                    return e;
                } else return e
            })
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

export const {setNewTextFieldValue, setSearchedStr} = actions;
export default reducer;
