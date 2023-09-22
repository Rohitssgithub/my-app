import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
connectDb()
import { user } from "@/util/db";
export async function GET(request) {
    // return new Response('hello')
    // return NextResponse.json({ name: 'anil' }, { status: 200 })

    let data = user;
    return NextResponse.json(user)
}
