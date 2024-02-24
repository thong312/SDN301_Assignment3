const mongoose = require('mongoose');
const Schema = mongoose.Schema
const orchidsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    original: {
        type: String,
        required: true
    },
    isNatural: {
        type: Boolean,
        required: true
    },
    color: {
        type: String,
        required: true
    },
});

var Orchids = mongoose.model('orchids', orchidsSchema);

module.exports = Orchids;