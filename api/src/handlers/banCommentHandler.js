const { Comment } = require("../db");

const banCommentHandler = async (id, action) => {

        const comment = await Comment.findOne({ where: { id } });

    if (action === "ban") {
        await comment.update({deleted: true});
        return "comment banned";
    } else {
        await comment.update({deleted: false}); 
        return "comment unBanned";
    }
}

module.exports = { banCommentHandler }