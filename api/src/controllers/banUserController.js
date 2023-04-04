const { banUserHandler } = require("../handlers/banUserHandler")

const banUserController = async (req, res) =>{
    const {id, status} = req.body;
    
    try {
        await banUserHandler(id, status);
        res.status(200).json("status has changed")
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { banUserController }