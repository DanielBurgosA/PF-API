"use strict";
const { commentsHandler } = require('../handlers/commentsHandler')

const commentsController = async (req, res) => {
  const { comment, userId, projectId } = req.body
  try {
    const comments = await commentsHandler(comment, userId, projectId);
    res.status(201).json(comments)
  } catch (error) {
    res.status(400).json({ "error": error.message })
  }
};

module.exports = { commentsController }