import React, {FC} from "react";
import s from "./data-list.module.css";

const DataList: FC<any> = ({listDataList}) => {
    return (
        <div>
            <table className={s.styledTable}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Active</th>
                    <th>Created</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>{listDataList}</tbody>
            </table>
        </div>
    )
}

export default DataList;