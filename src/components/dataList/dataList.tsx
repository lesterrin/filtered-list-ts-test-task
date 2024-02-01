import React, {FC} from "react";

const DataList: FC<any> = ({listDataList}) => {
    return <div>
        <h1>data list</h1>
        <table>
            <thead>
            <th>name</th>
            <th>active</th>
            <th>created</th>
            <th></th>
            </thead>
            <tbody>{listDataList}</tbody>
        </table>
    </div>
}

export default DataList;