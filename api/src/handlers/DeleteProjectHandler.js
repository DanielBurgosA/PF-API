const { Project } = require('../db')

const deleteProject = async(
    id
)=>{
        
        const projecttoDelete = await Project.findOne({where:{id}})

        projecttoDelete.update({deleted:true});
        projecttoDelete.save()

        return projecttoDelete
}

module.exports = {deleteProject}