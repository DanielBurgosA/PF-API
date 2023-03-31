const { ResetPasswordHandler } = require("../handlers/ResetPasswordHandler")

const ResetPasswordController = async (req, res ) =>{
    const {user_password} = req.body;
    const {user_email} = req.body;
    try {
        const reset = await ResetPasswordHandler(user_password, user_email);
        res.status(200).json("your password has been changed");
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = { ResetPasswordController };