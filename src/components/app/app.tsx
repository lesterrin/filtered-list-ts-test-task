import React, {useEffect} from 'react';
import s from './app.module.css';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {initializeApp} from "../../redux/appReducer";
import {isInitializedSelector} from "../../selectors/appSelector";
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
            <main className={s.container}>
                <Filter/>
                <DataListContainer/>
            </main>
        );
    } else {
        return <Loader/>
    }

}

export default App;