const { getUserProjectsHandler} = require("../handlers/getUserProjectsHandler")

const getUserProjectsController = async (req, res) => {
   
    try {
        const projects = await getUserProjectsHandler(req.user.id);
        res.status(200).json(projects);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = { getUserProjectsController };