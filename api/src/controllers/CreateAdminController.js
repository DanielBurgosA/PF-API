const { createAdmin } = require("../handlers/CreateAdminHandler");

const createAdminController = async (req,res) =>{
    const {
        admin_email,
        admin_name,
        admin_lastname,
        admin_password
    } = req.body;

    try {
        const postAdmin = await createAdmin(
            admin_email,
            admin_name,
            admin_lastname,
            admin_password,
        );
        res.status(200).json(postAdmin)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {createAdminController}