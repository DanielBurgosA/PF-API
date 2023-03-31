const { User } = require("../db");

const ForgotPasswordController = async (req, res) =>{
    
    const {user_email} = req.body;
    try{
        const change = await ForgotPasswordHandler(user_email);
        if (change === "email doesnt exist"){
            res.status(200).send(`user with email ${user_email} doesnt exist`);
        } else{
            res.status(200).send("reset password email has been send successfully");
        }
    }catch (error){
        res.status(400).send(error.message);
    }
    
}

module.exports = {ForgotPasswordController};