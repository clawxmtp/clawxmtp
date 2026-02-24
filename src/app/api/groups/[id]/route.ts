import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    try {
        const response = await fetch(`http://172.104.246.184:3000/groups/${id}`, {
            cache: 'no-store'
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error(`CORS Proxy Error (Group Detail ${id}):`, error);
        return NextResponse.json({ ok: false, error: "Internal Server Error" }, { status: 500 });
    }
}
