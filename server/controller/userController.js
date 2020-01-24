const User = require('../model/User')

exports.login = async (req, res) => {
}

exports.register = async (req, res) => {
  const user = new User(req.body)

  try {
    await user.save()
    res.send({ user })
  } catch (err) {
    res.sendStatus(404).send({err})
  }
}
