const { getAllComunidades } = require("../handlers/GetAllComunidadesHandler")
const { paginateditems } = require("../handlers/PaginationHandler")



const allComunidadesController = async (req,res)=>{
    const {id, name, location, userid, limit} = req.query
    const page = parseInt(req.query.page)
    try {
        const allComunidad = await getAllComunidades(id,name,location, userid)
        const paginatedComunidad = paginateditems(page,limit, allComunidad)
        res.status(200).json(paginatedComunidad)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {allComunidadesController}