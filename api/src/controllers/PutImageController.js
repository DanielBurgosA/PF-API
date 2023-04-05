const { updateUserImage } = require("../handlers/PutUserImageHandler")

const putImageController = async(req, res) =>{
    
    const { id } = req.user
    const { user_image } = req.body
    console.log(user_image) ;

    try {
        const usertoUpdate = await updateUserImage(
            id,
            user_image,
        )

        res.status(200).json(usertoUpdate)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={putImageController}