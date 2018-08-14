const mongoose = require('mongoose');
const { Schema } = mongoose; // ES6 deconstructure
// this file needs to be required
/* eslint-disable indent */
// prettier-ignore

const userSchema = new Schema({
    googleId: String,
});

// tell mongoose to creat a new collection(model) called users using userSchema
mongoose.model('users', userSchema);
