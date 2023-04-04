const { updateUser } = require("../handlers/PutUserHandler")


const putUserController = async(req,res)=>{
    const {
        user_email,
        password
    } = req.body

    try {
        const usertoUpdate = await updateUser(
            req.user.id,
            user_email,
            password
        )

        res.status(200).json(usertoUpdate)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={putUserController}