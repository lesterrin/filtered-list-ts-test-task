import React, {FC, useState} from "react";
import s from './edit-modal.module.css';

const EditModal: FC<any> = ({closeModal, editTextField, editedRowId, editedRowTextField}) => {

    const [inputValue, setInputValue] = useState(editedRowTextField);

    const onSaveButtonClick = () => {
        editTextField(editedRowId, inputValue)
        closeModal();
    }

    const onInputChangeHandler = (e: any) => {
        setInputValue(e.target.value);
    }

    return (
        <div className={s.dark_bg}>
            <div className={s.centered}>
                <button className={s.close_btn} onClick={() => closeModal(false)}>
                    x
                </button>
                <div className={s.modal}>
                    <h1>Edit</h1>
                    <label htmlFor={"nameInput"}>Name</label><br/>
                    <input id={"nameInput"} value={inputValue} onChange={onInputChangeHandler} type={"text"}/>
                    <button onClick={onSaveButtonClick}>Save</button>
                </div>
            </div>
        </div>)
}
export default EditModal;
