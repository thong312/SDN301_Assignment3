const express = require('express');
const bodyParser = require('body-parser');
const categoryController = require('../controllers/categoryController');

const categoryRouter = express.Router();
categoryRouter.use(bodyParser.json());

categoryRouter
    .route('/')
    .get(categoryController.index)
    .post(categoryController.create);

categoryRouter
    .route('/delete/:categoryId')
    .get(categoryController.remove);

categoryRouter
    .route('/edit/:categoryId')
    .get(categoryController.formEdit)
    .post(categoryController.edit);

categoryRouter
    .route('/detail/:categoryId')
    .get(categoryController.view);

module.exports = categoryRouter;

