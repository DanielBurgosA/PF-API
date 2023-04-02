"use strict";
const { Comment } = require("../db");

const commentsHandler = async (comment, userId, projectId) => {
  try {
    const newComment = await Comment.create({
      comment,
    });
    newComment.setUser(userId);
    newComment.setProject(projectId);
    return newComment;
  } catch (error) {
    throw error;
  }
};

module.exports = { commentsHandler };