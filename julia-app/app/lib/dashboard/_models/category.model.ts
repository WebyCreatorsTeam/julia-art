import mongoose, { Schema, model } from 'mongoose'

const CategorySchema = new Schema({
    type: {
        type: String,
        require: true
    },
    subCategory: [
        {
            type: {
                type: String,
                require: true
            }
        }]
})  

const Category = mongoose.models.Category || model("Category", CategorySchema)
export default Category