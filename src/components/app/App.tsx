import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {initializeApp} from "../../redux/app-reducer";
import {dataListSelector, isInitializedSelector} from "../../selectors/appSelector";
import Loader from "../loader/loader";
import DataListContainer from "../dataList/dataListContainer";

function App() {

    const dispatch = useAppDispatch();
    const isInitialized = useAppSelector(isInitializedSelector);

    useEffect(() => {
        dispatch(initializeApp());
    }, []);

    if (isInitialized) {
        return (
            <div>
                <DataListContainer/>
            </div>
        );
    } else {
        return <Loader/>
    }

}

export default App;
