import { NextResponse } from "next/server"
export function middleware() {
    console.log('middleware')
    if (request.nextUrl.pathname != '/login'){
        return NextResponse.redirect(new URL('/login', request.url))
    }

}