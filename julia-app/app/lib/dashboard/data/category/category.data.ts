import connectToDatabase from "@/app/lib/mongodb"
import Category from "../../_models/category.model"

export const getCategory = async () => {
    try {
        await connectToDatabase()
        const categories = await Category.find({})
        return categories
    } catch (error) {
        console.error(error)
    }
}