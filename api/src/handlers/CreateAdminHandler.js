const {Admin} = require('../db')
const createAdmin = async (
    admin_email,
    admin_name,
    admin_lastname,
    admin_password
)=>{
    const newAdmin = await Admin.create({
        admin_email,
        admin_name,
        admin_lastname,
        admin_password
    });

    return newAdmin
};

module.exports = {createAdmin}