const { Project } = require("../db");

const createProject = async (
  name,
  description,
  image,
  location,
  cost,
  userid,
  ) => {
    const newProject = await Project.create({
      name,
      description,
      image,
      location,
      cost,
    });

    newProject.setUser(userid)
   
  
    return newProject;
  };

  module.exports = {createProject}