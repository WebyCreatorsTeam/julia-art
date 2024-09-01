import { IFormInput } from "../_ts/form-fields.intarface";

export const RegInputFileds: Array<IFormInput> = [
    { type: "email", placeholder: "Введите E-mail", name: "userEmail", autoComp: "email" },
    { type: "password", placeholder: "Введите Пароль", name: "userPassword", autoComp: "new-password" },
    { type: "password", placeholder: "Подтвердите Пароль", name: "confirmUserPassword", autoComp: "new-password" },
    { type: "text", placeholder: "Введите Логин/Имя пользователя", name: "userName", autoComp: "username" }
]