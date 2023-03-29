const { getAllAdmin } = require("../handlers/GetAdminHanlder")
const { paginateditems } = require("../handlers/PaginationHandler")


const allAdminsController = async (req,res)=>{
    const {
        id,
        name,
        email,
        limit
    } = req.query
    const page = parseInt(req.query.page)

    try {
        const allAdmins = await getAllAdmin(id,name,email)
        const paginatedAdmins = paginateditems(page, limit, allAdmins)
        res.status(200).json(paginatedAdmins)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { allAdminsController }