const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: [3, 'Username must be at least 3 characters long'],
    required: [true, 'Username is required'],
    unique: [true, 'Username already exists.']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email already exists.']
  },
  password: {
    type: String,
    minlength: [5, 'Password must be at least 5 characters long.'],
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User
