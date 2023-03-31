const { deleteProject } = require("../handlers/DeleteProjectHandler")

const deleteProjectController = async (req,res)=>{
    const {
        id
    } = req.query

    try {
        const projecttoDelete = await deleteProject(id)

        res.status(200).json(projecttoDelete)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { deleteProjectController }