const { User } = require("../db")

const banUserHandler = async (id, status) => {
    try {
        const user = await User.findOne({where:{id}})
        console.log(user)
        if (status === "ban"){
          await  user.update({deleted: true}) 
        }
        if (status === "unBan"){
            await user.update({deleted: false})
        }
        return; 
    } catch (error) {
        console.log(error.messages)
    }
}

module.exports = { banUserHandler };