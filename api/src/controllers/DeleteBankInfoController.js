const { deleteBankInfo } = require("../handlers/DeletedBankInfosHandler")

const deletebankInfoController = async (req,res)=>{
    const {
        id
    } = req.query

    try {
        const bankInfotoDelete = await deleteBankInfo(id)

        res.status(200).json(bankInfotoDelete)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { deletebankInfoController }