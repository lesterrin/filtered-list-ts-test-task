import React from "react";
import {setSearchedStr} from "../../redux/app-reducer";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {searchedStrSelector} from "../../selectors/app-selector";

const Filter = () => {
    const dispatch = useAppDispatch();
    const searchedStr = useAppSelector(searchedStrSelector);

    const onChangeInputHandler = (e: any) => {
        dispatch(setSearchedStr(e.target.value));
    }

    return (
        <div>
            <input value={searchedStr} onChange={onChangeInputHandler}/>
        </div>
    )
}

export default Filter;