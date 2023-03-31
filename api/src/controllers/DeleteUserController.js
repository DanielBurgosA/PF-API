const { deleteUser } = require("../handlers/DeletedUserHandler")

const deleteUserController = async (req,res)=>{
    const {
        id
    } = req.query

    try {
        const usertoDelete = await deleteUser(id)

        res.status(200).json(usertoDelete)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { deleteUserController }