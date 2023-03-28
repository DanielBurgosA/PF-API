const { createProject } = require("../handlers/CreateProjectHandler");

const createProjectController = async (req, res) => {
    const {
            userid,
            adminid,
            name,
            description,
            image,
            location,
            cost,
            currentAmount,
            status,
            completed,
            deleted
                  } = req.body
    try {
        const postProject = await createProject(
            name,
            description,
            image,
            location,
            cost,
            currentAmount,
            status,
            completed,
            deleted,
            userid,
            adminid)
        res.status(200).json(postProject)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {createProjectController};