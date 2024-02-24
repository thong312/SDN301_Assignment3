const mongoose = require('mongoose');
const Schema = mongoose.Schema
const categoriesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

var Categories = mongoose.model('categories', categoriesSchema);

module.exports = Categories ;