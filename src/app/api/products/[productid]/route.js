import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
connectDb()
import { Product } from "@/models/product";

export async function DELETE(request, { params }) {
    console.log(params)
    try {
        await Product.deleteOne({ _id: params.productid })
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
    const payload = await request.json()
    console.log(payload)
    const result = await Product.findByIdAndUpdate({ _id: content.params.productid }, payload)
    return NextResponse.json({ result, success: true })
}

export async function GET(request, { params }) {
    try {
        const data = await Product.findById(params.productid);
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