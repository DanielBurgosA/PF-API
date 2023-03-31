const { createProject } = require("../handlers/CreateProjectHandler");

const createProjectController = async (req, res) => {
    const {
            name,
            description,
            image,
            location,
            cost,
                  } = req.body;
    
    const userid = req.user.id;
    console.log(userid);

    try {
        const postProject = await createProject(
            name,
            description,
            image,
            location,
            cost,
            userid)
        res.status(200).json(postProject)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {createProjectController};