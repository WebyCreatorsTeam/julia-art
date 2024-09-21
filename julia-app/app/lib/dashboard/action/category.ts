'use server'

import connectToDatabase from "../../mongodb";
import Category from "../_models/category.model";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { CategoryState} from "@/app/(dashboard)/_ts/definitions";
import { CategoryValidSchema } from "../validation/category.validation";

export const saveNewCategory = async (prevState: CategoryState, formData: FormData): Promise<CategoryState> => {
    const validatedFields = CategoryValidSchema.safeParse({
        categoryType: formData.get('categoryType')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
            success: false
        };
    }

    const { categoryType } = validatedFields.data;

    try {
        await connectToDatabase()
        await Category.create({ type: categoryType, subCategory: [] })
    } catch (error) {
        return { message: 'Something went wrong', success: false }
    }

    revalidatePath('/dashboard');

    return { errors: {}, message: 'Success', success: true }
}

export const getCategories = async () => {
    try {
        await connectToDatabase()
        const categories = await Category.find({})
        return JSON.parse(JSON.stringify(categories)); 
        // return categories
    } catch (error) {
        return { message: 'Something went wrong', success: false }
    }
}