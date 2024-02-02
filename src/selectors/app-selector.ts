import {AppStateType} from "../redux/store";
import {getExistedTextFieldName, getTextField} from "../helpers/utils";

export const dataListSelector = (searchedStr = "") => (state: AppStateType) => {
    if (!searchedStr) return state.app.dataList;
    else return state.app.dataList.filter(e => e[getExistedTextFieldName(e)].includes(searchedStr));
}

export const isInitializedSelector = (state: AppStateType) => state.app.isInitialized;

export const editedRowTextFieldSelector = (id: number) => (state: AppStateType) => {
    const result = state.app.dataList.filter(e => e.id === id);

    return getTextField(result[0]);
}

export const searchedStrSelector = (state: AppStateType) => state.app.searchedStr;