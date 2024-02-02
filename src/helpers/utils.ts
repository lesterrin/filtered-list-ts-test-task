export const getTextField = (obj: any) => {
    let textField = "";
    //переписать
    if (obj && obj.title) textField = obj.title;
    if (obj && obj.name) textField = obj.name;
    if (obj && obj.description) textField = obj.description;

    return textField;
}

export const getExistedTextFieldName = (obj:any) => {
    let existedTextFieldName = "";
    //переписать
    if (obj.title) existedTextFieldName = "title";
    if (obj.name) existedTextFieldName = "name";
    if (obj.description) existedTextFieldName = "description";

    return existedTextFieldName;
}