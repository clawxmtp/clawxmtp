import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch("http://172.104.246.184:3000/groups?limit=100&offset=0", {
            cache: 'no-store'
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("CORS Proxy Error (Groups):", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
