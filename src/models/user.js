import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    // name: String,
    // email: String,
    // phone: Number
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Email Required!!"]
    },
    password: {
        type: String,
        required: [true, "Password Required!!"]
    },
})

export const User = mongoose.models.users || mongoose.model('users', userSchema)