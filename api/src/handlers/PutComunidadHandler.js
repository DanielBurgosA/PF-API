const {Comunidad} = require('../db')

const updateComunidad = async(
    id,
    comunidad_name,
    comunidad_description,
    comunidad_location,
    userId
)=>{
    let where = {}
    if(id){where.id=id}
    if(userId){where.userId=userId}
    const comunidadtoUpdate = await Comunidad.findOne({where});

    let infotoupdate = {}
    if(comunidad_name){infotoupdate.comunidad_name=comunidad_name}
    if(comunidad_description){infotoupdate.comunidad_description=comunidad_description}
    if(comunidad_location){infotoupdate.comunidad_location=comunidad_location}

    comunidadtoUpdate.update(infotoupdate)
    comunidadtoUpdate.save()

    return comunidadtoUpdate
}

module.exports = {updateComunidad}
