const { deleteComunidad } = require("../handlers/DeletedComunidadHandler")


const deleteComunidadController = async (req,res)=>{
    const {
        id
    } = req.query

    try {
        const comunidadtoDelete = await deleteComunidad(id)

        res.status(200).json(comunidadtoDelete)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
module.exports = { deleteComunidadController }