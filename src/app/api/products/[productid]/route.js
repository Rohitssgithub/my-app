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