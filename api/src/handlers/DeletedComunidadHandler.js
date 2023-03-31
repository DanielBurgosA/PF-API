const { Comunidad } = require('../db')

const deleteComunidad= async(
    id
)=>{
        
        const comunidadtoDelete = await Comunidad.findOne({where:{id}})

        comunidadtoDelete.update({deleted:true});
        comunidadtoDelete.save()

        return comunidadtoDelete
}

module.exports = {deleteComunidad}