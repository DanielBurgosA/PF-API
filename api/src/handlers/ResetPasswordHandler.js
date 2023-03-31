const { User } = require("../db");
const { genPassword } = require("../authWithJWT/utils");

const ResetPasswordHandler = async (user_password, user) => {

    const hashSalt = genPassword(user_password);

    const hash = hashSalt.hash;
    const salt = hashSalt.salt;

    await User.update({ hash: hash, salt: salt }, {
        where: {
            id: user.id
        }
    });

    return "password updated";

    
}

module.exports = { ResetPasswordHandler }