import axios from 'axios';
import {DataType} from "../types";

const instance = axios.create();

export const getListData = () => {
    return instance
        .get<Array<DataType>>(`http://localhost:3001/data`)
        .then((response) => response.data)
        .catch((e) => alertError(e));
}

const alertError = (e: any) => alert(e);