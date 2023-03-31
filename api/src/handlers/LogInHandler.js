const { validPassword, issueJWT } = require("../authWithJWT/utils")
const { User } = require("../db");

async function LogIn(user_email, user_password) {

    
    const user = await User.findOne({ where: { user_email: user_email } });


    if (!user) {
        return {success: false, msg: "user not found"};
    }

    const isValid = validPassword(user_password, user.hash, user.salt);

    if (isValid) {

        const tokenObject = issueJWT(user);

        return {token:tokenObject.token, success:true, msg:"you are in", origin:"local"}

    } else {

        return { success: false, msg:"you entered the wrong password"};

    }
}

module.exports = { LogIn };