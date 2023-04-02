"use strict";
const { Comment } = require("../db");

const getCommentsByUserIdHandler = async (userId) => {
  try {
    const commentsUserById = await Comment.findAll({
      where: {
        userId,
      },
    });
    return commentsUserById;
  } catch (error) {
    throw error;
  }
};

module.exports = { getCommentsByUserIdHandler };
