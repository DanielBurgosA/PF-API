const { User } = require('../db')
const { genPassword } = require("../authWithJWT/utils")

const updateUser = async (
    id,
    user_email,
    password
) => {

    try {
        let infotoupdate = {}
        if (user_email) { infotoupdate.user_email = user_email }
        if (password) {
            {
                const hashSalt = genPassword(password);
                infotoupdate.hash = hashSalt.hash;
                infotoupdate.salt = hashSalt.salt;
            }
        }

        const usertoUpdate = await User.findOne({ where: { id } })

        await usertoUpdate.update(infotoupdate);

        return usertoUpdate;
        
    } catch (err){
        console.log(err.message);
    }
    

}

module.exports = { updateUser }