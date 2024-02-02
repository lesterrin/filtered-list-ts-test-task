import DataList from "./dataList"
import React, {FC, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {dataListSelector, editedRowTextFieldSelector, searchedStrSelector} from "../../selectors/app-selector";
import {setNewTextFieldValue} from "../../redux/app-reducer";
import DataListItem from "./dataListItem/dataListItem";
import EditModal from "../modal/edit-modal";
import {getTextField} from "../../helpers/utils";

const DataListContainer: FC<any> = () => {


    const dispatch = useAppDispatch();

    const editTextField = (id: number, newValue: string) => {
        dispatch(setNewTextFieldValue({id, newValue}));
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedRowId, setEditedRowId] = useState(0);

    const editedRowTextField = useAppSelector(editedRowTextFieldSelector(editedRowId));

    const openModal = (id: number) => {
        setEditedRowId(id);
        setIsModalOpen(true);
    }

    const searchedStr = useAppSelector(searchedStrSelector);
    const listData = useAppSelector(dataListSelector(searchedStr));
    const listDataList = listData.map(e => {

            //Переписать
            let textField = getTextField(e);

            return <DataListItem key={e.id}
                                 id={e.id}
                                 active={e.active}
                                 textField={textField}
                                 openModal={openModal}
            />
        }
    );

    return (
        <>
            <DataList listDataList={listDataList}/>
            {isModalOpen ?
                <EditModal closeModal={() => setIsModalOpen(false)}
                           editTextField={editTextField}
                           editedRowTextField={editedRowTextField}
                           editedRowId={editedRowId}

                /> : null}
        </>
    )
}

export default DataListContainer;