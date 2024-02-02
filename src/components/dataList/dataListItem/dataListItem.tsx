import React, {FC} from "react";

const DataListItem: FC<any> = ({id, active, textField, openModal}) => {
    return (
        <tr>
            <td>{textField}</td>
            <td>{active ? "active" : "inactive"}</td>
            <td>
                <button onClick={()=>openModal(id)}>edit</button>
            </td>
        </tr>
    )
}

export default DataListItem;