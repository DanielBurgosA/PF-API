const { createBankInfo } = require("../handlers/CreateBankInfoHandler")


const createBankInfoController = async(req,res)=>{
    const {
        bankname,
        account,
        comunidadId
    } = req.body

    try {
        const postBankInfo = await createBankInfo(
            bankname,
            account,
            comunidadId
        )

        res.status(200).json(postBankInfo)
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

module.exports = {createBankInfoController}