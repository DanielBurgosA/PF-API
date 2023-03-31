const { getAllProjects, } = require("../handlers/getAllProjectsHandler")
const { paginateditems } = require("../handlers/PaginationHandler")

const allProjectsController = async (req, res) => {
  const { 
        id,
        name,
        location,
        status,
        completed,
        deleted,
        userId,
        limit } = req.query
  const page = parseInt(req.query.page)
  try {
    const allProjects = await getAllProjects(id,name,location,status,completed,deleted,userId);
    const paginatedProjects = paginateditems(page, limit, allProjects);
    res.status(200).json(paginatedProjects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const userProjectsController = async (req, res) => {
  const { 
        id,
        name,
        location,
        completed,
        userId,
        limit } = req.query

  const status ="approved"
  const deleted = false;
  const page = parseInt(req.query.page)
  try {
    const allProjects = await getAllProjects(id,name,location,status,completed,deleted,userId);
    const paginatedProjects = paginateditems(page, limit, allProjects);
    res.status(200).json(paginatedProjects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { allProjectsController, userProjectsController };