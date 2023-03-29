const { Admin} = require("../db");

const getAllAdmin = async (
    id,
    name,
    email
)=>{
    let where = {}

    if(id){where.id = id}
    if(name){where.admin_name = { [Op.iLike]:`%${name}%`}}
    if(email){where.admin_email = { [Op.iLike]:`%${email}%`}}

    const allAdmins = await Admin.findAll({where})
    return allAdmins
}

module.exports = {getAllAdmin}
