const { User } = require("../db");
const { LogIn } = require("../handlers/LogInHandler");


const logInController = async (req, res) => {
    const { user_email, user_password } = req.body;

    try {
        const state = await LogIn(user_email, user_password);

        if (state.success === true){
            res.status(200).json(state);
        }else{
            res.status(200).json(state)
        }
        
    } catch (error) {
        console.log(error)
        res.status(400).json(error.message);
    }
}
module.exports = { logInController };