const { updateBankInfo } = require("../handlers/PutBankInfoHandler")


const putBankInfoController = async (req,res)=>{
    const {
        bankname,
        account,
        comunidadId
    } = req.query

    try {
        const bankInfoToUpdate = await updateBankInfo(bankname,account,comunidadId)

        res.status(200).json(bankInfoToUpdate)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { putBankInfoController }