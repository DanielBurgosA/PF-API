const { getAllDonations } = require("../handlers/GetAllDonationsHandler")
const { paginateditems } = require("../handlers/PaginationHandler")


const allDonationsController = async (req,res)=>{
    const{
        id,
        monto,
        projectId,
        userId,
        limit
    } = req.query
    const page = parseInt(req.query.page)
    try {
        const allDonations = await getAllDonations(id,monto,projectId,userId)
        const paginatedDonations = paginateditems(page,limit,allDonations)
        res.status(200).json(paginatedDonations)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {allDonationsController}