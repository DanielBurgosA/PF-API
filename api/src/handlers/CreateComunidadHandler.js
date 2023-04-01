const { Comunidad } = require('../db')

const createComunidad = async (
    comunidad_name,
    comunidad_description,
    comunidad_location,
    userId
)=>{
    const newComunidad = await Comunidad.create({
        comunidad_name,
        comunidad_description,
        comunidad_location,
        userId
    })

    return newComunidad
}

module.exports = {createComunidad}