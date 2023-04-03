const { banCommentHandler } = require("../handlers/banCommentHandler")

const banCommentController = async (req, res) => {
    const { id, action } = req.body;
    try {
        const banUnban = await banCommentHandler(id, action);
        res.status(200).json(banUnban);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = { banCommentController }