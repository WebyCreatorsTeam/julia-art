'use server'

import connectToDatabase from "../../mongodb"
import User from "../_models/user.mode";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';
import { State } from "@/app/(dashboard)/_ts/definitions";
import { RegValidSchema } from "../validation/validation";
import { signIn } from "@/auth";

export const registUser = async (prevState: State, formData: FormData) => {
    const validatedFields = RegValidSchema.safeParse({
        userEmail: formData.get('userEmail'),
        userPassword: formData.get('userPassword'),
        confirmUserPassword: formData.get('confirmUserPassword'),
        userName: formData.get('userName'),
    })

    // console.log(validatedFields)

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
            success: false
        };
    }
    const { userEmail, userPassword, userName } = validatedFields.data;

    const newPass = await bcrypt.hash(userPassword, 10);

    try {
        await connectToDatabase()
        await User.create({ userEmail, userPassword: newPass, userName })
    } catch (error) {
        return { message: 'Something went wrong' }
    }

    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');
}


export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}