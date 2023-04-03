"use strict"
const { paginateditems } = require("../handlers/PaginationHandler");
const { getCommentsByProjectIdHandler } = require("../handlers/getCommentsByProjectIdHandler")
const { getAllCommentsHandler } = require("../handlers/getAllCommentsHandler")


const getCommentsByProjectIdController = async (req, res) => {
    const { id, limit } = req.query;
    const page = parseInt(req.query.page)
    try {
        if (id) {
            const comments = await getCommentsByProjectIdHandler(id);
            const paginatedcomments = paginateditems(page, limit, comments);
            res.status(200).json(paginatedcomments);
        }else{
            const Allcomments = await getAllCommentsHandler();
            res.status(200).json({success: true, msg: "users comments", allComments: Allcomments});
        }

    } catch (error) {
        res.status(400).json({ "error": error.message })
    }
}

module.exports = { getCommentsByProjectIdController }