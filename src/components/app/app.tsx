import React, {useEffect} from 'react';
import s from './app.module.css';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {initializeApp} from "../../redux/app-reducer";
import {isInitializedSelector} from "../../selectors/app-selector";
import Loader from "../loader/loader";
import DataListContainer from "../dataList/dataListContainer";
import Filter from "../filter/filter";

const App = () => {

    const dispatch = useAppDispatch();
    const isInitialized = useAppSelector(isInitializedSelector);

    useEffect(() => {
        dispatch(initializeApp());
    }, []);

    if (isInitialized) {
        return (
            <div className={s.container}>
                <Filter/>
                <DataListContainer/>
            </div>
        );
    } else {
        return <Loader/>
    }

}

export default App;