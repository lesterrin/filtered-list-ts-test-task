import DataList from "./dataList"
import React from "react";
import {useAppSelector} from "../../redux/store";
import {dataListSelector} from "../../selectors/appSelector";
import DataListItem from "./dataListItem/dataListItem";

const DataListContainer = () => {

    const listData = useAppSelector(dataListSelector);
    const listDataList = listData.map(e => {

        //Переписать
            let textField = "";
            if (e.name) textField = e.name;
            if (e.description) textField = e.description;
            if (e.title) textField = e.title;

            return <DataListItem key={e.id}
                                 id={e.id}
                                 active={e.active}
                                 textField={textField}
            />
        }
    );

    return <DataList listDataList={listDataList}/>
}

export default DataListContainer;