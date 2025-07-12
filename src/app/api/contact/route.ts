import { sendMail } from "@/utils/mailSender";
import { mailTemplate } from "@/utils/mailtemplate";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    try {
        const { email, firstname, lastname, phone, message } = await request.json();
        if (!email || !firstname || !message) {
            return NextResponse.json({
                error: "Email, Firstname and Message is required!",
                success: false
            }, { status: 400 })
        }

        await sendMail({ to: process.env.MAIL_USER as string, subject: "Portfolio Contact Form", body: mailTemplate({ firstname, lastname, email, phone, message }) })

        return NextResponse.json({
            message: "Mail send succesfully!",
            success: true
        }, {status: 200})
    } catch (error) {
        console.log("Error in sending mail ::", error);
        return NextResponse.json({
            error: "Error sendind mail!",
            success: false
        }, {status: 500})
    }
}