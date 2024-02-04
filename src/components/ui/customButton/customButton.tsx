import React, {FC} from "react";
import s from "./customButton.module.css";

const CustomButton: FC<CustomButtonPropsType> = ({text, onClickFunc, size}) => {

    const sizeClass = size === "big" ? s.big : s.small;
    const classNames = `${s.customButton} ${sizeClass}`;
    return <>
        <button className={classNames} onClick={onClickFunc}>{text}</button>
    </>
}
type CustomButtonPropsType = {
    text: string,
    onClickFunc: () => void,
    size: "big" | "small"
}

export default CustomButton;