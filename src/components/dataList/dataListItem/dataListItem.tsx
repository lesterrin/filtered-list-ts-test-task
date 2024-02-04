import React, {FC, memo} from "react";
import CustomButton from "../../ui/customButton/customButton";

const DataListItem: FC<DataListItemType> = ({id, isActive, textField, created, openModal}) => {
    console.log('test');
    return (
        <tr>
            <td>{textField}</td>
            <td>{isActive ? "active" : "inactive"}</td>
            <td>{created}</td>
            <td>
                <CustomButton text={'edit'} onClickFunc={() => openModal(id)} size={"small"}/>
            </td>
        </tr>
    )
}

type DataListItemType = {
    id: number,
    isActive: boolean,
    textField: string,
    created: string
    openModal: (id: number) => void
}

export default DataListItem;