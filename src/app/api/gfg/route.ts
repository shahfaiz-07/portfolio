import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const response = await axios.get("https://gfgstatscard.vercel.app/shahfaiz?raw=true")
        return NextResponse.json({
            success: true,
            data: response.data
        })
    } catch (error) {
        return NextResponse.json({
            error: "Error fetching profile",
            success: false
        })
    }
}