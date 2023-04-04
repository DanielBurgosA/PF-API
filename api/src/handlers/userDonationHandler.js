const { Donation, User, Project } = require("../db");

const userDonationHandler = async (id) => {

    try {
        const donations = await Donation.findAll({
            where: {userId : id},
            include: [
                {
                    model: User,
                    attributes: ['user_name'],
                },
                {
                    model: Project,
                    attributes: ['name']
                }
        
            ]
        })
        console.log(donations);
        return donations;
    } catch (error) {

        return error.message

    }


}

module.exports = { userDonationHandler }