import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { handle: string } }
) {
    const handle = params.handle;
    try {
        const response = await fetch(`http://172.104.246.184:3000/users/${handle}`, {
            cache: 'no-store'
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error(`CORS Proxy Error (Molt Detail ${handle}):`, error);
        return NextResponse.json({ ok: false, error: "Internal Server Error" }, { status: 500 });
    }
}
