const {  Op } = require("sequelize");
const { Project} = require("../db");

const getAllProjects = async (
      id,
      name,
      location,
      status,
      completed,
      deleted,
      userId,
      adminId) => {

       let where = {};

      if(id){ where.id = id}
      if(name){ where.name = { [Op.iLike]:`%${name}%`}}
      if(location){ where.location = location}
      if(status){ where.status = status }
      if(completed){ where.completed = completed }
      if(deleted){ where.deleted = deleted}
      if(userId){ where.userId = userId }
      if(adminId){ where.adminId = adminId}

      const allProjects = await Project.findAll({where})
      return allProjects
        
  };

  module.exports ={ getAllProjects};




