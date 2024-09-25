'use server'

import connectToDatabase from "../../mongodb";
import Category from "../_models/category.model";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { CategoryState } from "@/app/(dashboard)/_ts/definitions";
import { CategoryValidSchema } from "../validation/category.validation";
import { uploadToCloudinary } from "../cloudinary";
import sharp from "sharp";

const imageToURI = async (file: any, height: any, width: any): Promise<string> => {
    try {
        const fileBuffer = await sharp(await file.arrayBuffer()).resize({ height: height, width: width }).webp({ lossless: true, quality: 100 }).toBuffer();
        const mimeType = file.type;
        const encoding = "base64";
        const base64Data = Buffer.from(fileBuffer).toString("base64");

        const bdataURI = "data:" + mimeType + ";" + encoding + "," + base64Data

        return bdataURI;
    } catch (error) {
        console.log(error)
        return "Error Image To URI"
    }
}

export const saveNewCategory = async (prevState: CategoryState, formData: FormData): Promise<CategoryState> => {
    const file = formData.get('categoryImg') as File
    console.log(file.size === 0)

    if(file.size === 0) {
        console.log("no image")
        return {
            errors: { categoryType: ["Need to choose image"] },
            message: "Need to choose image",
            success: false  
        };
    }

    const fileUri: string = await imageToURI(file, 720, 720)
    const res = await uploadToCloudinary(fileUri, file.name);

    if (!res.success || !res.result) {
        // console.log("image save failure")
        return {
            errors: { categoryType: ["Image Upload Failure. Failed to Create New Category."] },
            message: "Image Upload Failure. Failed to Create New Category.",
            success: false
        };
    }

    // console.log(res.result.secure_url)

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
        await Category.create({ type: categoryType, img: res.result.secure_url, subCategory: [] })
    } catch (error) {
        return { message: 'Something went wrong', success: false }
    }

    revalidatePath('/dashboard');
    redirect('/dashboard');

    // return { errors: {}, message: 'Success', success: true }
}

export async function deleteCategory(categoryId: string) {
    try {
        await connectToDatabase()
        await Category.deleteOne({ _id: categoryId })
        revalidatePath('/dashboard')
        return { message: 'Category deleted', success: true }
    } catch (error) {
        return { message: 'Something went wrong', success: false }
    }
}