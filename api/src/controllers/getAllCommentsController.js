const {getAllCommentsHandler} = require ("../handlers/getAllCommentsHandler");

const getAllCommentsController = async (req, res) => {
    try {
        const allComments = await getAllCommentsHandler();
        res.status(200).json(allComments);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { getAllCommentsController }