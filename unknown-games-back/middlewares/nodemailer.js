import nodemailer from "nodemailer";
import mailTemplate from "../htmltemp/mailTemplate"
import dotenv from "dotenv";

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'flavio99@ethereal.email',
        pass: 'TYxnVJX2J5Q3GjxWpq'
    }
});


let info = async(mail, html) => await transporter.sendMail({
    from: "Flavio Cummerata",
    to: mail,
    subject: "Unknown-Games e-mail autosender",
    text: "Please verify your mail",
    html: html
})

export default info;
