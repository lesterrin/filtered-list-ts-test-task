import React, {FC} from "react";

const DataList: FC<any> = ({listDataList}) => {
    return (
        <div>
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
    )
}

export default DataList;