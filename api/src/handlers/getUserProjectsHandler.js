const { Project } = require("../db");

const getUserProjectsHandler = async (id) => {
    try {
        const projects = await Project.findAll({ where: { userId: id } });
        return projects;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { getUserProjectsHandler }