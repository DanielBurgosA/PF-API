const { User } = require("../db");

const UserDataHandler = async (user) => {
  const userLogged = await User.findOne({ where: { id: user.id } });

  const userFixInfo = {
    userLogged: userLogged.user_name,
    userLogged: userLogged.user_lastname,
    userLogged: userLogged.user_email,
    userLogged: userLogged.user_image
  }

  return userFixInfo;
};

module.exports = { UserDataHandler };
