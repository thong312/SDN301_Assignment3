// commentController.js
const Comment = require('../models/comment');

class CommentController {
    view(req, res) {
        Comment.find({}).populate('author')
            .then((comments) => {
                res.json(comments);
            })
            .catch((error) => {
                console.error('Mongoose Error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    }

    addComment(req, res) {
        const { rating, comment, author } = req.body;
        const newComment = new Comment({ rating, comment, author });
        newComment.save()
            .then(() => {
                res.status(201).json({ message: 'Comment added successfully' });
            })
            .catch((error) => {
                console.error('Mongoose Error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    }
}

module.exports = new CommentController();
