import {AppStateType} from "../redux/store";

export const dataListSelector = (state:AppStateType) => state.app.dataList;
export const isInitializedSelector = (state:AppStateType) => state.app.isInitialized;