const { projectByIdHandler } = require("../handlers/projectByIdHandler");
const projectByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const projectId = await projectByIdHandler(id);
    res.status(200).json(projectId);
  } catch (error) {
    res.status(400).json({ error: error.messageS });
  }
};

module.exports = { projectByIdController };
