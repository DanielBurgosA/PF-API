"use strict"
const { paginateditems } = require("../handlers/PaginationHandler");
const { getCommentsByUserIdHandler } = require("../handlers/getCommentsByUserIdHandler");

const getCommentsByUserIdController = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
    try {
        const commentsUser = await getCommentsByUserIdHandler(id, userId);
        res.status(200).json(commentsUser);
    } catch (error) {
        res.status(400).json({ "error": error.message });
    }
}

module.exports = { getCommentsByUserIdController }