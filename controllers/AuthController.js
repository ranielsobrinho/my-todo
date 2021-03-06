const jwt = require('jwt-simple')
const config = require('../libs/config')
const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
  async token (req, res) {
    const { email, password } = req.body

    const userToken = await User.findOne({ where: { email } })
      .then(user => {
        if (!user) {
          res.status(401).json({ error: 'Falha na autenticação.' })
        }
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            return res.status(401).json({ error: 'Falha na autenticação.' })
          }

          if (!result) {
            return res.json({ error: 'Senha inválida.' })
          }

          if (result) {
            const payload = { id: user.id }
            return res.json({
              token: jwt.encode(payload, config.jwtSecret),
              userId: user.id
            })
          }
        })
      }).catch((error) => res.send(error))
  }
}
