const { Project } = require("../db");
const projectByIdHandler = async (id) => {
  const searchProject = await Project.findOne({ where: { id: id } });
  return searchProject;
};

module.exports = { projectByIdHandler };
