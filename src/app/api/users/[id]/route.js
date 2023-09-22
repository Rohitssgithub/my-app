import { NextResponse } from "next/server";
import { user } from "@/util/db";
import { Content } from "next/font/google";
export async function GET(request, Content) {
    // return new Response('hello')
    // return NextResponse.json({ name: 'anil' }, { status: 200 })

    console.log(Content)

    let data = user;
    return NextResponse.json(user)
}