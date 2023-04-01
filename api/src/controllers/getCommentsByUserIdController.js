"use strict"
const { paginateditems } = require("../handlers/PaginationHandler");
const { getCommentsByUserIdHandler } = require("../handlers/getCommentsByUserIdHandler");

const getCommentsByUserIdController = async (req, res) => {
    const { id, limit } = req.query;
    const page = parseInt(req.query.page)
    try {
        const commentsUser = await getCommentsByUserIdHandler(id);
        const paginatedcommentsuser = paginateditems(page,limit,commentsUser)
        res.status(200).json(paginatedcommentsuser);
    } catch (error) {
        res.status(400).json({ "error": error.message });
    }
}

module.exports = { getCommentsByUserIdController }