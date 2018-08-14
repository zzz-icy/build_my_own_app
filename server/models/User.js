const mongoose = require('mongoose');
const { Schema } = mongoose; // ES6 deconstructure
// this file needs to be required somewhere else
/* eslint-disable indent */
// prettier-ignore

const userSchema = new Schema({
    googleId: String,
});

// tell mongoose to creat a new collection(model) called users using userSchema
mongoose.model('users', userSchema);

// won't refer to this User model class using require
