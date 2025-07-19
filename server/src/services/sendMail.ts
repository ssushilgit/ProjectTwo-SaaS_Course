import nodemailer from "nodemailer";

interface IMailInformation {
    to: string,
    subject : string,
    text :string
}

const sendMail = async (mailInformation : IMailInformation) =>{
    // logic to send mail
    const transporter =nodemailer.createTransport({
        service : "gmail", // @gmail.com vayo vane mail janxa
        auth : {
            user : process.env.NODEMAILER_GMAIL, // sender ko gmail 
            pass : process.env.NODEMAILER_GMAIL_APP_PASSWORD // real password haina --> app password ho
        }
    })

    const mailFormatObject = {
        from : "SaaS MERN - shresthasushil741@gmail.com",
        to : "",
        subject : "Welcome to teacher of SaaS MERN project", 
        text : ""
    }

    try {
        await transporter.sendMail(mailFormatObject)
    } catch (error) {
        console.log(error)
    }
}

export default sendMail