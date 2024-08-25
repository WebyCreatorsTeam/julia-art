import mongoose, { Schema, model } from 'mongoose'

const CategorySchema = new Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    }
})

const Category = mongoose.models.Category || model("Category", CategorySchema)
export default Category