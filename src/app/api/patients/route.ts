import { NextResponse } from "next/server";


export async function GET() {
    const baseUrl = process.env.API_BASE_URL;
    const username = process.env.API_USERNAME;
    const password = process.env.API_PASSWORD;

    if (!baseUrl || !username || !password) {
        return NextResponse.json(
            { error: "API credentials are not configured. See .env.example"},
            { status: 500 },
        );
    }

    const token = Buffer.from(`${username}:${password}`).toString("base64");

    try {
     const upstream = await fetch(baseUrl, {
       headers: { Authorization: `Basic ${token}` },
       cache: "no-store",
     });

     if (!upstream.ok) {
        return NextResponse.json(
         { error: `Upstream API responded with ${upstream.status}`},
         { status: upstream.status },
        );
     }

     return NextResponse.json(await upstream.json());
    } catch {
     return NextResponse.json(
        { error: "Unable to reach the patient data API." },
        { status: 502 },
     );
    }
}