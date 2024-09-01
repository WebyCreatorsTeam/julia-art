import { IFormInput } from "../_ts/form-fields.intarface";

export const LoginInputFileds: Array<IFormInput> = [
    { type: "email", placeholder: "Введите E-mail", name:"userEmail", autoComp: "email" },
    { type: "password", placeholder: "Введите Пароль", name:"userPassword" , autoComp: "current-password" },
]