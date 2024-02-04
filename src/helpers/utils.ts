import {DataType} from "../types";

//фунцкия возвращает имя текстового поля, которое в дальнейшем будет редактироваться или отображаться в поле name
export const getExistedTextFieldName = (obj: DataType) => {
    let existedTextFieldName = "";

    if (obj && obj.title) existedTextFieldName = "title";
    if (obj && obj.name) existedTextFieldName = "name";
    if (obj && obj.description) existedTextFieldName = "description";

    return existedTextFieldName;
}