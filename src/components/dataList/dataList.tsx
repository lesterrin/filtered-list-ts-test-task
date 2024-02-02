import React, {FC} from "react";
import s from "./data-list.module.css";

const DataList: FC<any> = ({listDataList}) => {
    return (
        <div>
            <table className={s.styledTable}>
                <thead>
                <tr>
                    <th>name</th>
                    <th>active</th>
                    <th>created</th>
                </tr>
                </thead>
                <tbody>{listDataList}</tbody>
            </table>
        </div>
    )
}

export default DataList;