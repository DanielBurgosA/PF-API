const { Donation, User, Project } = require('../db')

const createDonation = async (
    monto,
    userid,
    projectid
    
)=>{
    try {
        let num_donationxuser = (await Donation.count({where:{userId:userid, projectId:projectid}})) +1
        const newDonation = await Donation.create({
            monto,
            num_donationxuser
        });

        newDonation.setUser(userid)
        newDonation.setProject(projectid)

        return newDonation;

    } catch (error) {
        return {error: error.message}
    }
}

module.exports = {createDonation}