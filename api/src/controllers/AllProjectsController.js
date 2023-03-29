const { getAllProjects, } = require("../handlers/GetAllProjectsHandler")
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
        adminId,
        limit } = req.query
  const page = parseInt(req.query.page)
  try {
    const allProjects = await getAllProjects(id,name,location,status,completed,deleted,userId,adminId);
    const paginatedProjects = paginateditems(page, limit, allProjects);
    res.status(200).json(paginatedProjects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { allProjectsController };