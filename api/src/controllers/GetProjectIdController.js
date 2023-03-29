const { getProjectById } = require("../handlers/GetProjectById")

const projectsIdController = async (req, res) => {
    const { id } = req.querparams;
    try {
        const projectById = await getProjectById(id);
        res.status(200).json(projectById);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { projectsIdController };