import nodemailer from "nodemailer"

export const sendMail = async ({to, subject, body}: {to:string; subject:string; body:string;}) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        })
        const info = await transporter.sendMail({
            from:process.env.MAIL_USER,
            to: to,
            subject,
            html: body
        });
    } catch(err) {
        console.log(`Some Error Occured while sending email !!`);
        console.error(`ERROR : ${err}`);
    }
}