"use strict"
const { paginateditems } = require("../handlers/PaginationHandler");
const { getCommentsByProjectIdHandler } = require("../handlers/getCommentsByProjectIdHandler")


const getCommentsByProjectIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const comments = await getCommentsByProjectIdHandler(id);
        res.status(200).json(comments)
    } catch (error) {
        res.status(400).json({ "error": error.message })
    }
}

module.exports = { getCommentsByProjectIdController }