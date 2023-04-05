const { User } = require("../db");
const { issueJWT } = require("../authWithJWT/utils");
const nodemailer = require("nodemailer");
require('dotenv').config();
const {enviarCorreo} = require("../controllers/NotificationController")

const ForgotPasswordHandler = async (user_email) =>{
    
   
    const user = await User.findOne({where: { user_email: user_email }});

    if (!user){
        return "email doesnt exist";
    }

    const token = issueJWT(user);

    const mensaje = "you are receving this beacuse you (or someone else) have requested the reset of the password for your account. \n\n" +
    "Please click on the following lonk, or paste this into your browser to e the porcess within  one hour of receiving it: \n\n" +
    `https://client-pf-seven.vercel.app/reset?token=${token.token}\n\n`+
    "if you did not request this, please ignore this email and your password will remain inchanged.\n";

    enviarCorreo(user_email, "reset password", mensaje, "forgotPassword");
}

module.exports = {ForgotPasswordHandler};