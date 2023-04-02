"use strict";
const { commentsHandler } = require('../handlers/commentsHandler')

const commentsController = async (req, res) => {
  const { comment, projectId } = req.body
  const userId = req.user.id;
  try {
    const comments = await commentsHandler(comment, userId, projectId);
    res.status(201).json(comments)
  } catch (error) {
    res.status(400).json({ "error": error.message })
  }
};

module.exports = { commentsController }