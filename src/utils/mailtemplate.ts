export function mailTemplate({firstname, lastname, email, phone, message}: {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    message: string;
}) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table style="border-collapse: separate; border-spacing: 10px;">
        <tr>
            <td>Name</td>
            <td>${firstname} ${lastname}</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>${email}</td>
        </tr>
        <tr>
            <td>Phone</td>
            <td>${phone}</td>
        </tr>
        <tr>
            <td>Message</td>
            <td>${message}</td>
        </tr>
    </table>
</body>
</html>`
}