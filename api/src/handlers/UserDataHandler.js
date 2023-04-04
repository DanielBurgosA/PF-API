const { User } = require("../db");

const UserDataHandler = async (user) => {
  const userLogged = await User.findOne({ where: { id: user.id } });

  const userFixInfo = {
    name: userLogged.user_name,
    lastname: userLogged.user_lastname,
    email: userLogged.user_email,
    image: userLogged.user_image
  }

  return userFixInfo;
};

module.exports = { UserDataHandler };
