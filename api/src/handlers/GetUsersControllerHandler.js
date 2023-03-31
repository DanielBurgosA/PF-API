const { Op } = require("sequelize")
const { User } = require("../db")

const getAllUsers = async (
    id,
    name,
    email
)=>{
    let where = {}

    if(id){where.id = id}
    if(name){where.user_name = { [Op.iLike]:`%${name}%`}}
    if(email){where.user_email = { [Op.iLike]:`%${email}%`}}

    const allUsers = await User.findAll({where})
    return allUsers
}

module.exports = { getAllUsers }