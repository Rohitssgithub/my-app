import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    name: String,
    email: String,
    phone: Number
})

export const User = mongoose.models.users || mongoose.model('users', userSchema)