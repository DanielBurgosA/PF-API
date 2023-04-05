const { Comment, User, Project } = require ("../db");

const getAllCommentsHandler = async () => {
    try {
        const allComments = await Comment.findAll({
            include: [
                {
                  model: User,
                  attributes: ['user_name'],
                },
                {
                  model: Project,
                  attributes: ['name'],
                },
              ],
        });
        return allComments;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { getAllCommentsHandler }