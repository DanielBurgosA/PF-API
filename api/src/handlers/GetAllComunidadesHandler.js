const { Op } = require("sequelize");
const { Comunidad } = require("../db");

const getAllComunidades = async (
    id,
    name,
    location,
    userid
 )=>{

    let where={}
    
    if(id){ where.id = id}
    if(name){where.comunidad_name = { [Op.iLike]:`%${name}%`} }
    if(location){where.comunidad_location = { [Op.iLike]:`%${location}%`}}
    if(userid){where.userId = userid}

    const allComunidades = await Comunidad.findAll({where})
    return allComunidades
   /*  if(comunidad_name === undefined && userid === undefined && id){
        const filterbyid = await Comunidad.findAll({
            where: { id:id }
        })
        return filterbyid
    }if(comunidad_name  && userid === undefined && id===undefined){
        const filterbyname = await Comunidad.findAll({
            where:{ comunidad_name : { [Op.iLike]:`%${comunidad_name}%`}}
        })
        return filterbyname
    }if(comunidad_name === undefined && userid  && id===undefined){
        const filterbyuserid = await Comunidad.findAll({
            where: { userId : userid}
        })
        return filterbyuserid
    }else{
        const allcomunidades = await Comunidad.findAll()
        return allcomunidades
    } */
}

module.exports = {getAllComunidades}