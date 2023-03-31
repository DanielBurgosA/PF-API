const nodemailer  = require('nodemailer')
const nodemailerSendgrid = require('nodemailer-sendgrid')

 const sendEmailController = async (req,res)=>{
    const transport = nodemailer.createTransport(
        nodemailerSendgrid({
        })
    ) 

    const mailOptions = {
        from: "hsssvf@gmail.com",
        to: "velarde.hans97@gmail.com",
        subject: "Enviado desde API LinkingFuture",
        html: "BOTAME TU GAAAAAAAAAAAAAA"
    }

    try {
        const info = await transport.sendMail(mailOptions)
        console.log("mensaje enviado:");
        res.status(200).json("mensaje enviado")
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}

module.exports = {sendEmailController}