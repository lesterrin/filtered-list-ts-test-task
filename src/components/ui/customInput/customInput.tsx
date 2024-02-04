import React, {FC, useId} from "react";
import s from "./customInput.module.css";

const CustomInput: FC<CustomInputType> = ({placeholder, onChangeFunc, value, labelText}) => {

    const id = useId();

    return <div>
        {labelText && <><label htmlFor={id} className={s.labelText}>{labelText}</label><br/></>}
        <input id={id} value={value} placeholder={placeholder} onChange={onChangeFunc} className={s.customInput}/>
    </div>
}

type CustomInputType = {
    onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    placeholder?: string,
    labelText?: string
}

export default CustomInput;