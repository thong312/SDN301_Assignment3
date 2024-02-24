// orchids.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { commentSchema } = require('./comment');

const orchidsSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    isNatural: { type: Boolean, default: false },
    origin: { type: String, required: true },
    comments: [commentSchema], // Use the imported commentSchema here
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Categories", required: true }
}, { timestamps: true });

const Orchid = mongoose.model('Orchid', orchidsSchema);

module.exports = Orchid;
