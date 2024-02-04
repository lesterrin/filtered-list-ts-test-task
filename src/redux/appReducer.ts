import {getListData} from '../api/api';
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DataType} from "../types";
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
                if (action.payload) {
                    state.isInitialized = true;
                    state.dataList = action.payload;
                }
            })
    }
})

const {actions, reducer} = appSlice;

export const initializeApp = createAsyncThunk(
    'app/initializeApp',
    async () => await getListData());

export const {setNewTextFieldValue, setSearchedStr} = actions;
export default reducer;
