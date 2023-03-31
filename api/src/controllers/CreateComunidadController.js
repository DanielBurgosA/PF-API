const { createComunidad } = require("../handlers/CreateComunidadHandler")


const createComunidadController = async (req,res)=>{
    const {
        comunidad_name,
        comunidad_description,
        comunidad_location,
        userId
    } = req.body

    try {
        const postComunidad = await createComunidad(
            comunidad_name,
            comunidad_description,
            comunidad_location,
            userId
        )
        res.status(200).json(postComunidad)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {createComunidadController}