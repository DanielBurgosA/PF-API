const { Donation } = require("../db");

const getUserProjectsHandler = async (id) => {
    try {
        const projects = await Donation.findAll({ where: { id } });
        return projects;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { getUserProjectsHandler }