// commentRouter.js
const express = require('express');
const bodyParser = require('body-parser');
const commentController = require('../controllers/commentController');

const commentRouter = express.Router();
commentRouter.use(bodyParser.json());

commentRouter
    .route('/')
    .get(commentController.view)
    .post(commentController.addComment);

module.exports = commentRouter;
