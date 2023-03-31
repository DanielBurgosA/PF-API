const { User } = require("../db");
const { issueJWT } = require("../authWithJWT/utils");
const nodemailer = require("nodemailer");
require('dotenv').config();

const ForgotPasswordHandler = async (user_email) =>{
    
   
    const user = await User.findOne({where: { user_email: user_email }});

    if (!user){
        return "email doesnt exist";
    }

    const token = issueJWT(user);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: `${process.env.EMAIL_ADDRESS}`,
            pass: `${process.env.EMAIL_PASSWORD}`
        }
    })

    const emailOptions = {
        from:"",
        to: `${user.user_email}`,
        subject: "link to reset password",
        text: 
            "you are receving this beacuse you (or someone else) have requested the reset of the password for your account. \n\n" +
            "Please click on the following lonk, or paste this into your browser to e the porcess within  one hour of receiving it: \n\n" +
            `http://localhost:3000/reset/${token}\n\n`+
            "if you did not request this, please ignore this email and your password will remain inchanged.\n",
    }

    transporter.sendMail(emailOptions, function (err, response){
        if (err) {
            console.error("there was an error:", err)
        } else{
            console.log(`here is the res:`, response);
            response.status(200).json('recovery email send')
        }
    })



}