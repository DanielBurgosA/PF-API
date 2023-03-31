const { updateProject } = require("../handlers/PutProjectsHandler")


const putProjectController = async(req,res)=>{
    const {
        id,
        name,
        description,
        image,
        location,
        cost,
        currentAmount,
        status
    } = req.query

    try {
        const projecttoUpdate = await updateProject(
            id,
            name,
            description,
            image,
            location,
            cost,
            currentAmount,
            status)

        res.status(200).json(projecttoUpdate)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {putProjectController}