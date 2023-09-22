import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
connectDb()
// import { user } from "@/util/db";
export async function GET() {
    // let data = user;

    let data = [];
    try {
        data = await User.find();
    }
    catch (err) {
        data = { success: false }
    }
    return NextResponse.json({ result: data, success: true })
}

export async function POST(request) {
    let payload = await request.json()
    const addUser = new User(payload)
    const data = await addUser.save();
    return NextResponse.json({ result: data, success: true })

}