const User = require('../model/User')

exports.login = async (req, res) => {
}

exports.register = async (req, res) => {
  const user = new User(req.body)

  try {
    await user.save()
    res.send({ user })
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(404).send(err)
    } else {
      console.log(err)
      res.status(500).send('Something went wrong')
    }
  }
}
