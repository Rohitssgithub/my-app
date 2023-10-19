import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
import { Product } from "@/models/product";
connectDb()
export async function GET() {
    try {
        const data = await Product.find();
        console.log('data', data)
        if (data) {
            return NextResponse.json({ result: data, success: true, total: data.length });
        } else {
            return NextResponse.json({ message: "Product not found", success: false });
        }
    } catch (err) {
        console.error("Error fetching user:", err);
        return NextResponse.json({ message: "Error fetching user", success: false });
    }
}

export async function POST(request) {
    let payload = await request.json()
    console.log(payload, 'payload')
    const addProduct = new Product(payload)
    const data = await addProduct.save();
    return NextResponse.json({ result: data, success: true })

}