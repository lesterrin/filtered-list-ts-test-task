import React from "react";
import {setSearchedStr} from "../../redux/appReducer";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {searchedStrSelector} from "../../selectors/appSelector";
import s from "./filter.module.css";
import CustomInput from "../ui/customInput/customInput";

const Filter = () => {
    const dispatch = useAppDispatch();
    const searchedStr = useAppSelector(searchedStrSelector);

    const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchedStr(e.target.value));
    }

    return (
        <div className={s.filterWrapper}>
            <div className={s.inputWrapper}>
                <CustomInput value={searchedStr} onChangeFunc={onChangeInputHandler} placeholder={"search..."}/>
            </div>
        </div>
    )
}

export default Filter;