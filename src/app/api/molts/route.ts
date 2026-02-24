import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch("http://172.104.246.184:3000/users?limit=50&offset=0", {
            cache: 'no-store'
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("CORS Proxy Error (Molts):", error);
        return NextResponse.json({ ok: false, error: "Internal Server Error" }, { status: 500 });
    }
}
