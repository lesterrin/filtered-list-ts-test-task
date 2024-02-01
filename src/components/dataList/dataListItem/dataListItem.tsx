import React, {FC} from "react";

const DataListItem: FC<any> = ({id, active, textField}) => {
    return (
        <tr>
            <td>{textField}</td>
            <td>{active ? "active" : "inactive"}</td>
            <td>
                <button>edit</button>
            </td>
        </tr>
    )
}

export default DataListItem;