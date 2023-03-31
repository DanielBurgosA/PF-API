const { genPassword } = require("./authWithJWT/utils")
const { User } = require("./db");

const user_email = "admin@admin.com"
const user_name = "Admin"
const user_lastname = "Administrador"
const user_password = "admin"
const admin = true;

const createAdm = async () => {
    const saltHash = genPassword(user_password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = await User.create({
        user_email,
        user_name,
        user_lastname,
        salt,
        hash,
        admin,
    });
    
    return newUser;
}

module.exports = { createAdm };