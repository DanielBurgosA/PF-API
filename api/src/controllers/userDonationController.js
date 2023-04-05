const { userDonationHandler } = require("../handlers/userDonationHandler")

const userDonationController = async (req, res) => {
    
    try {
        const donations = await userDonationHandler(req.user.id);
        res.status(200).json(donations);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = { userDonationController }