import { z } from "zod"

export const passwordValid = (error_text: string) => {
    return z
        .string({
            required_error: error_text,
        })
        .regex(new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$'),
            "Пароль должен содержать английские буквы и цифры, минимум один специальный символ !@#$%^&* и не содержать пробелов."
        )
}

export const userEmailValid = z
    .string()
    .email({ message: "Неверный адрес электронной почты" })
    .toLowerCase()
    .trim()

export const userNameValid = z
    .string({
        required_error: "Пожалуйста, заполните имя.",
        invalid_type_error: "Имя должно состоять только из букв"
    })
    .min(5, {
        message: "Имя должно состоять минимум из 5 символов."
    })

export const RegValidSchema = z.object({
    userEmail: userEmailValid,
    userPassword: passwordValid("Пожалуйста, заполните пароль."),
    confirmUserPassword: passwordValid("Пожалуйста, заполните пароль повторно."),
    userName: userNameValid,
}).superRefine(({ confirmUserPassword, userPassword }, ctx) => {
    if (confirmUserPassword !== userPassword) {
        ctx.addIssue({
            code: "custom",
            message: "Пароли не совпадают",
            path: ['confirmUserPassword']
        });
    }
});

export const LogValidSchema = z.object({
    userEmail: userEmailValid,
    userPassword: passwordValid("Пожалуйста, заполните пароль."),
})

export const UpdateValidSchema = z.object({
    userEmail: userEmailValid,
    userName: userNameValid,
})