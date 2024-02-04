import DataList from "./dataList"
import React, {FC, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {dataListSelector, editedRowTextFieldSelector, searchedStrSelector} from "../../selectors/app-selector";
import {setNewTextFieldValue} from "../../redux/app-reducer";
import DataListItem from "./dataListItem/dataListItem";
import EditModal from "../modal/edit-modal";
import {getExistedTextFieldName} from "../../helpers/utils";

const DataListContainer: FC = () => {

    const dispatch = useAppDispatch();

    const openModal = (id: number) => {
        setEditedRowId(id);
        setIsModalOpen(true);
    }

    const editTextField = (id: number, newValue: string) => {
        dispatch(setNewTextFieldValue({id, newValue}));
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedRowId, setEditedRowId] = useState(0);

    useEffect(() => {
        if (document) {
            document.body.style.overflow = isModalOpen ? 'hidden' : 'auto'
        }
    }, [isModalOpen])

    const editedRowTextField = useAppSelector(editedRowTextFieldSelector(editedRowId));

    const searchedStr = useAppSelector(searchedStrSelector);
    const listData = useAppSelector(dataListSelector(searchedStr));
    const listDataList = listData.map(e => {

            let textField = e[getExistedTextFieldName(e)];

            return <DataListItem key={e.id}
                                 id={e.id}
                                 isActive={e.active}
                                 textField={textField}
                                 created={e.createdAt}
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