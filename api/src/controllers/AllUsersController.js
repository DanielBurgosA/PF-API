const { getAllUsers } = require("../handlers/GetUsersControllerHandler")
const { paginateditems } = require("../handlers/PaginationHandler")


const allUsersController = async (req,res)=>{
    const {
        id,
        name,
        email,
        limit
    } = req.query
    const page = parseInt(req.query.page)

    try {
        const allUsers = await getAllUsers(id,name,email)
        const paginatedUsers = await paginateditems(page, limit, allUsers)
        res.status(200).json(paginatedUsers)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {allUsersController}