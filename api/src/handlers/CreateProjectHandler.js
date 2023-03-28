const { Project } = require("../db");

const createProject = async (
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
  adminid
  ) => {
    const newProject = await Project.create({
      name,
      description,
      image,
      location,
      cost,
      currentAmount,
      status,
      completed,
      deleted
    });

    newProject.setUser(userid)
    newProject.setAdmin(adminid)
  
    
  
    return newProject;
  };

  module.exports = {createProject}