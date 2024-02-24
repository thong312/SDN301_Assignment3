const mongoose = require('mongoose');
const Schema = mongoose.Schema

const categoriesSchema = new Schema({
    categoryName:
        String
},
    { timestamps: true, });

var Categories = mongoose.model('categories', categoriesSchema);

module.exports = Categories;