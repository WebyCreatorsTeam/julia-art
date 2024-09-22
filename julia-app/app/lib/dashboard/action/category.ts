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
        // const image = await sharp(img.buffer).resize({ height: height, width: width }).webp({ lossless: true, quality: 100 }).toBuffer()
        // const b64 = Buffer.from(image).toString("base64")
        // const bdataURI = "data:" + img.mimetype + ";base64," + b64;

        // const fileBuffer = await file.arrayBuffer();
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

    const fileUri: string = await imageToURI(file, 720, 720)
    const res = await uploadToCloudinary(fileUri, file.name);

    console.log(res)

    if (!res.success || !res.result) {
        console.log("failure")
    }
    console.log(res.result.secure_url)

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