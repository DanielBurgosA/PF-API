"use strict";
const { Comment } = require("../db");

const getCommentsByProjectIdHandler = async (projectId) => {
  try {
    const findComments = await Comment.findAll({
      where: {
        projectId,
      },
    });
    return findComments;
  } catch (error) {
    throw error;
  }
};

module.exports = { getCommentsByProjectIdHandler };
