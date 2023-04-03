const { Op } = require("sequelize")
const { Donation, User, Project } = require("../db")

const getAllDonations = async (
    id,
    monto,
    projectId,
    userId
) => {

    let where = {}

    if (id) { where.id = id }
    if (monto) { where.monto = monto }
    if (projectId) { where.projectId = projectId }
    if (userId) { where.userId = userId }

    const allDonations = await Donation.findAll({
        where,
        include: [
            {
                model: User,
                include: [
                    {
                        model:Project,
                    }
                ]
            }
        ]
    })
    return allDonations

}

module.exports = { getAllDonations }