const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true }
}, { timestamps: true });

module.exports = {
    commentSchema: commentSchema // Export commentSchema
};
