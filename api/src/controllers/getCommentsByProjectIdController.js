"use strict"
const { paginateditems } = require("../handlers/PaginationHandler");
const { getCommentsByProjectIdHandler } = require("../handlers/getCommentsByProjectIdHandler")


const getCommentsByProjectIdController = async (req, res) => {
    const { id, limit } = req.query;
    const page = parseInt(req.query.page)
    try {
        const comments = await getCommentsByProjectIdHandler(id);
        const paginatedcomments = paginateditems(page,limit,comments)
        res.status(200).json(paginatedcomments)
    } catch (error) {
        res.status(400).json({ "error": error.message })
    }
}

module.exports = { getCommentsByProjectIdController }