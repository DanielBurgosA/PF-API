const { User } = require("../db");

const UserDataHandler = async (user) => {
  const userLogged = await User.findOne({ where: { id: user.id } });

  return userLogged;
};

module.exports = { UserDataHandler };
