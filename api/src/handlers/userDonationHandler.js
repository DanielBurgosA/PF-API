const { Donation } = require("../db");

const userDonationHandler = async (id) => {

    try {
        const donations = await Donation.findAll({ where: { userId: id } })

        console.log(donations);

        return donations;
    } catch (error) {
        
        return error.message
    
    }


}

module.exports = { userDonationHandler }