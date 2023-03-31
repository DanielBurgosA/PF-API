const { updateUser } = require("../handlers/PutUserHandler")


const putUserController = async(req,res)=>{
    const {
        user_name,
        user_lastname,
        id,
        user_email
    } = req.query

    try {
        const usertoUpdate = await updateUser(
            user_name,
            user_lastname,
            id,
            user_email
        )

        res.status(200).json(usertoUpdate)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={putUserController}