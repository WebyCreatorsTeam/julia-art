'use server'

import connectToDatabase from "../../mongodb"
import { z } from 'zod';
import User from "../_models/user.mode";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const passwordValid = (error_text: string) => {
    return z
        .string({
            required_error: error_text,
        })
        .regex(new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$'),
            "Пароль должен содержать английские буквы и цифры, минимум один специальный символ !@#$%^&* и не содержать пробелов."
        )
}

const FormSchema = z.object({
    userEmail: z
        .string()
        .email({ message: "Неверный адрес электронной почты" })
        .toLowerCase()
        .trim(),
    userPassword: passwordValid("Пожалуйста, заполните пароль."),
    confirmUserPassword: passwordValid("Пожалуйста, заполните пароль повторно."),
    userName: z
        .string({
            required_error: "Пожалуйста, заполните имя.",
            invalid_type_error: "Имя должно состоять только из букв"
        })
        .min(5, {
            message: "Имя должно состоять минимум из 5 символов."
        }),
}).superRefine(({ confirmUserPassword, userPassword }, ctx) => {
    if (confirmUserPassword !== userPassword) {
        ctx.addIssue({
            code: "custom",
            message: "Пароли не совпадают",
            path: ['confirmUserPassword']
        });
    }
})
    ;

export type State = {
    errors?: {
        userEmail?: string[];
        userPassword?: string[];
        confirmUserPassword?: string[];
        userName?: string[];
    };
    message?: string | null;
    success?: boolean | null;
};

export const registUser = async (prevState: State, formData: FormData) => {
    const validatedFields = FormSchema.safeParse({
        userEmail: formData.get('userEmail'),
        userPassword: formData.get('userPassword'),
        confirmUserPassword: formData.get('confirmUserPassword'),
        userName: formData.get('userName'),
    })

    console.log(validatedFields)

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
            success: false
        };
    }
    const { userEmail, userPassword, userName } = validatedFields.data;

    try {
        await connectToDatabase()
        await User.create({ userEmail, userPassword, userName })

        // return { message: "Добавлен новый пользователь", success: true }
        // revalidatePath('/dashboard/users');
        // redirect('/dashboard/users');
    } catch (error) {
        // console.log(error)
        return {
            message: 'Something went wrong',
        }
        // return { message: (error as any).error.errors[0].message || 'Something went wrong', success: false }
    }
    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');
}