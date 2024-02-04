import React, {FC, useState} from "react";
import s from './editModal.module.css';
import CustomInput from "../ui/customInput/customInput";
import CustomButton from "../ui/customButton/customButton";

const EditModal: FC<EditModalPropsType> = ({
                                               closeModal,
                                               editTextField,
                                               editedRowId,
                                               editedRowTextField
                                           }) => {

    const [inputValue, setInputValue] = useState(editedRowTextField);

    const onSaveButtonClick = () => {
        editTextField(editedRowId, inputValue)
        closeModal();
    }

    const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <div className={s.dark_bg}>
            <article className={s.modal}>
                <div className={s.modalHeader}>
                    <button className={s.close_btn} onClick={closeModal}>
                        x
                    </button>
                    <h3>Edit</h3>
                </div>
                <div className={s.modalBody}>
                    <CustomInput value={inputValue} onChangeFunc={onInputChangeHandler} labelText={"Name"}/>
                </div>
                <div className={s.modalFooter}>
                    <CustomButton text={"Save"} onClickFunc={onSaveButtonClick} size={"big"}/>
                </div>
            </article>
        </div>)
}

type EditModalPropsType = {
    closeModal: () => void,
    editTextField: (id: number, newValue: string) => void,
    editedRowId: number,
    editedRowTextField: string
}

export default EditModal;
