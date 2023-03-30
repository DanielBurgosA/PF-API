const { BankInfo } = require('../db')

const updateBankInfo = async(
    bankname,
    account,
    comunidadId
)=>{
        
        const bankinfotoUpdate = await BankInfo.findOne({where:{comunidadId}})

        let infotoupdate = {}
        if(bankname){infotoupdate.bankname = bankname}
        if(account){infotoupdate.account = account}

        bankinfotoUpdate.update(infotoupdate);
        bankinfotoUpdate.save();

        return bankinfotoUpdate;
}

module.exports = {updateBankInfo}