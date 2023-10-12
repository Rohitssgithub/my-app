import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import bycrypt from "bcryptjs";

connectDb()
export async function GET() {
    try {
        const data = await User.find();
        if (data) {
            return NextResponse.json({ result: data, success: true, total: data.length });
        } else {
            return NextResponse.json({ message: "User not found", success: false });
        }
    } catch (err) {
        console.error("Error fetching user:", err);
        return NextResponse.json({ message: "Error fetching user", success: false });
    }
}

export async function POST(request) {
    try {
        const { name, email, password } = await request.json()
        let existUser = await User.findOne({ email: email });
        if (existUser) {
            return NextResponse.json({
                message: 'User already exists'
            })
        }
        else {
            const user = new User({
                name, email, password
            })
            user.password = bycrypt.hashSync(user.password, parseInt(process.env.BCRYPT))
            await user.save()
            const response = NextResponse.json(user, {
                status: 201
            })
            return response
        }

    } catch (err) {
        return NextResponse.json({
            message: "failed to create user",
            status: false
        })

    }

}