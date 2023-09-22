import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
connectDb()
// import { user } from "@/util/db";
export async function GET() {
    // let data = user;
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
    let payload = await request.json()
    const addUser = new User(payload)
    const data = await addUser.save();
    return NextResponse.json({ result: data, success: true })

}