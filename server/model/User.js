const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const ObjectId = mongoose.Schema.Types.ObjectId

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: [true, 'Username is already in user'],
    required: [true, 'User name is required']
  },
  email: {
    type: String,
    unique: [true, 'Email already in user'],
    required: [true, 'Email is required'],
    validate (value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    },
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [5, 'Password must be at least 5 characters long']
  },
  timestamps: true
})

UserSchema.methods.generateAuthToken = async function() {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, 'Mastaraz')

  user.tokens = user.tokens.concat({ token })
  await user.save()
  return token
}

UserSchema.virtual('events', {
  ref: 'Event',
  localFields: '_id',
  foreignField: 'owner'
})

UserSchema.methods.toJSON = function () {
  const user = this

  const userObject = user.toObject()

  // Removes password and tokens from the object
  delete userObject.password
  delete userObject.tokens

  return userObject
}

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await UserSchema.findOne({ email })

  if (!user) {
    throw new Error('Unable to login')
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error('Invalid Credentials')
  }

  return user
}

UserSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User
