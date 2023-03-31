const { BankInfo, Comunidad } = require('../db')

const createBankInfo = async (
    bankname,
    account,
    comunidadId
)=>{
    try {
        const newBankInfo = await BankInfo.create({
            bankname,
            account,
            comunidadId
        })
    
        /* let comunidad = await Comunidad.findOne({
            where:{
                id: comunidad_id
            }
        })
    
        newBankInfo.setComunidad(comunidad) */
        return newBankInfo
    } catch (error) {
        return {error: error.message}
    }
    
}

module.exports = {createBankInfo}