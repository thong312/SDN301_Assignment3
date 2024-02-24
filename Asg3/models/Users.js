const mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},
    { timestamps: true });

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
