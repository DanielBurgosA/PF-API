const { Op, where} = require('sequelize')
const { BankInfo } = require("../db");

const getAllBankInfo = async (
    id,
    bankname,
    comunidadid
 )=>{
    let where = {}
    
    if(id){where.id=id}
    if(bankname){where.bankname= { [Op.iLike]:`%${bankname}%`} }
    if(comunidadid){where.comunidadId= comunidadid}

    const allbankInfos = await BankInfo.findAll({where})
    return allbankInfos
}

module.exports  = {getAllBankInfo}