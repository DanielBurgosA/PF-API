const { getAllBankInfo } = require("../handlers/GetAllBankInfoHandler")
const { paginateditems } = require("../handlers/PaginationHandler")


const allBankInfoController = async (req,res)=>{
    const {id, bankname, comunidadid, limit} = req.query
    const page = parseInt(req.query.page)
    try {
        const allBankInfo = await getAllBankInfo(id,bankname,comunidadid )
        const paginatedBankInfo = paginateditems(page, limit, allBankInfo)
        res.status(200).json(paginatedBankInfo);
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}

module.exports = {allBankInfoController}