const { validPassword, issueJWT } = require("../authWithJWT/utils")
const { User } = require("../db");

async function LogIn(user_email, user_password) {


    const user = await User.findOne({ where: { user_email: user_email } });


if (!user) {
    return { success: false, msg: "user not found" };
} else if (user.deleted) {
    return { success: false, msg: "user banned" };
}

const isValid = validPassword(user_password, user.hash, user.salt);

if (isValid) {
    const tokenObject = issueJWT(user);

    const userFix = {
        name: user.user_name,
        lastname: user.user_lastname,
        email: user.user_email,
        image: user.user_image
    }

    return { token: tokenObject.token, success: true, msg: "you are in", origin: "local", rol: user.admin, userFix }

} else {
    return { success: false, msg: "you entered the wrong password" };
}
}

module.exports = { LogIn };