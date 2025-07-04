import mongoose from 'mongoose';


const productSchema = new mongoose.Schema(
    
    {
        title: { type: String, required: true },
        description: String,
        code: {
            type: String,
            unique: true
        },
        price: Number,
        status: Boolean,
        stock: {
            type: Number,
            default: 0
        },
        category: String,
        thumbnails:[]

    }
)

export const productModel = mongoose.model(
    "productos",
    productSchema
)




