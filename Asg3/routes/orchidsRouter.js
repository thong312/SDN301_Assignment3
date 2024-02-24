const express = require('express')
const bodyParser = require('body-parser');

const Orchids = require('../models/orchids');
const orchidController = require('../controllers/orchidController');

const orchidRouter = express.Router();

orchidRouter.use(bodyParser.json());


orchidRouter
    .route('/')
    .get(orchidController.index)
    .post(orchidController.create) 
orchidRouter
   .route('/delete/:orchidId')   
   .get(orchidController.remove)
orchidRouter
   .route('/edit/:orchidId')
   .get(orchidController.formEdit)
   .post(orchidController.edit)
orchidRouter
   .route('/detail/:orchidId')
   .get(orchidController.view)
   
module.exports = orchidRouter;