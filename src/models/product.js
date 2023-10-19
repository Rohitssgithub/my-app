import mongoose, { Schema } from "mongoose";


const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: [true, "price Required!!"]
    },
    description: {
        type: String,
        required: [true, "description Required!!"]
    },
})

export const Product = mongoose.models.product || mongoose.model('product', productSchema)