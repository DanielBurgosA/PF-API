const { createBankInfo } = require("../handlers/CreateBankInfoHandler")


const createBankInfoController = async(req,res)=>{
    const {
        bankname,
        account,
        comunidad_id
    } = req.body

    try {
        const postBankInfo = await createBankInfo(
            bankname,
            account,
            comunidad_id
        )

        res.status(200).json(postBankInfo)
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

module.exports = {createBankInfoController}