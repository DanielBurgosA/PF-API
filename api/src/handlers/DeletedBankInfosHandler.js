const { BankInfo } = require('../db')

const deleteBankInfo = async(
    id
)=>{
        
        const bankinfotoDelete = await BankInfo.findOne({where:{id}})

        bankinfotoDelete.update({deleted:true});
        bankinfotoDelete.save()

        return bankinfotoDelete
}

module.exports = {deleteBankInfo}