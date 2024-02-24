const express = require('express');
const bodyParser = require('body-parser');
const Categories = require("../models/catagories");

const categoryRouter = express.Router();

categoryRouter.use(bodyParser.json());

categoryRouter
    .route('/')
    // Trong route GET cho /categories
    .get((req, res) => {
        Categories.find({})
            .then((categories) => {
                res.json(categories)
            })
            .catch((error) => {
                console.error('Mongoose Error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    })


    .post((req, res) => {
        console.log(req.body);
        Categories.create(req.body)
            .then((category) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(category);
            })
            .catch((error) => {
                if (error.name === 'ValidationError') {
                    console.error('Mongoose Validation Error:', error.message);
                    res.status(400).json({ error: 'Bad Request', details: error.message });
                } else {
                    console.error('Mongoose Error:', error);
                    res.status(500).json({ error: 'Internal Server Error' });
                }
            });
    })
    .put((req, res) => {
        res.end("no support");
    })
    .delete((req, res) => {
        Categories.deleteOne().then((resp) => {
            res.json(resp);
        });
    });

categoryRouter
    .route("/:categoryId")
    .get((req, res) => {
        Categories.findById(req.params.categoryId).then((category) => {
            res.json(category);
        });
    })
    .post((req, res) => {
        res.end("no support");
    })
    .put((req, res) => {
        Categories.findByIdAndUpdate(
            req.params.categoryId,
            {
                $set: req.body,
            },
            { new: true }
        ).then((category) => {
            res.json(category);
        });
    })
    .delete((req, res) => {
        Categories.findByIdAndDelete(req.params.categoryId).then((resp) => {
            res.json(resp);
        });
    });

module.exports = categoryRouter;
