const {Project} = require('../db')

const updateProject = async (
    id,
    name,
    description,
    image,
    location,
    cost,
    currentAmount,
    status
)=>{
    let where = {}
    if(id){where.id=id}
    const projecttoUpdate = await Project.findOne({where});

    let infotoupdate = {}
    if(name){infotoupdate.name=name}
    if(description){infotoupdate.image=image}
    if(location){infotoupdate.location=location}
    if(cost){infotoupdate.cost=cost}
    if(currentAmount){infotoupdate.currentAmount=currentAmount}
    if(status){infotoupdate.status=status}

    projecttoUpdate.update(infotoupdate)
    projecttoUpdate.save()

    return projecttoUpdate
}

module.exports = {updateProject}