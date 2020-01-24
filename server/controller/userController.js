const User = require('../model/User')

exports.login = async (req, res) => {
}

exports.register = async (req, res) => {
  const user = new User(req.body)

  try {
    await user.save().catch((err) => {
      res.status(404).send({ err })
    })
    res.send({ user })
  } catch (err) {
    res.status(404).send({ err })
  }
}
