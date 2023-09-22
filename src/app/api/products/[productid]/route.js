import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
connectDb()
import { User } from "@/models/user";

export async function DELETE(request, { params }) {
    console.log(params)
    try {
        await User.deleteOne({ _id: params.productid })
        return NextResponse.json({
            message: "user deleted",
            status: true
        })

    } catch (err) {
        return NextResponse.json({
            message: "user not deleted",
            status: false
        })
    }
}
export async function PUT(request, content) {
    const produtId = content.params.productid;
    console.log(produtId)
    const filter = { _id: produtId };
    const payload = await request.json()
    console.log(payload)
    const result = await User.findByIdAndUpdate(filter, payload)
    return NextResponse.json({ result, success: true })
}
export async function GET(request, { params }) {
    try {
        const data = await User.findById(params.productid);
        if (data) {
            return NextResponse.json({ result: data, success: true });
        } else {
            return NextResponse.json({ message: "User not found", success: false });
        }
    } catch (err) {
        console.error("Error fetching user:", err);
        return NextResponse.json({ message: "Error fetching user", success: false });
    }
}