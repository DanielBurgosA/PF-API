const { Comunidad } = require('../db')

const createComunidad = async (
    comunidad_name,
    comunidad_description,
    comunidad_location,
    userid
)=>{
    const newComunidad = await Comunidad.create({
        comunidad_name,
        comunidad_description,
        comunidad_location,
    })

    newComunidad.setUser(userid)

    return newComunidad
}

module.exports = {createComunidad}