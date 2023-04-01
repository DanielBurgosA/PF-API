const { updateComunidad } = require("../handlers/PutComunidadHandler")


const putComunidadController = async(req,res)=>{
    const {
    id,
    comunidad_name,
    comunidad_description,
    comunidad_location,
    userId
    } = req.query

    try {
        const comunidadtoUpdate = await updateComunidad(
            id,
            comunidad_name,
            comunidad_description,
            comunidad_location,
            userId)

        res.status(200).json(comunidadtoUpdate)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {putComunidadController}