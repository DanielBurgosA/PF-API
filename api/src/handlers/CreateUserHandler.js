const { User } = require("../db");
const { genPassword } = require("../authWithJWT/utils")

const createUser = async (
  user_email,
  user_name,
  user_lastname,
  user_password
) => {

  const saltHash = genPassword(user_password);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = await User.create({
    user_email,
    user_name,
    user_lastname,
    salt,
    hash
  });

  return newUser
};

module.exports = { createUser };