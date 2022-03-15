const jwt = require('jwt-simple')
const key = require('./libs/config')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decode = jwt.decode(token, key.jwtSecret)
    req.usuario = decode
    next()
  } catch (error) {
    return res.status(401).json({ mensagem: 'Falha na autenticação' })
  }
}
