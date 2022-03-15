const Todo = require('../models/Todo')
const User = require('../models/User')

module.exports = {
  async index (req, res) {
    const { userId } = req.params
    delete req.body.id

    const user = await User.findByPk(userId, {
      include: {
        association: 'todos',
        attributes: ['id', 'content', 'done']
      }
    })

    if (!user) {
      res.status(400).json({ error: 'Usuário não encontrado.' })
    }

    res.send(user.todos)
  },

  async getTodo (req, res) {
    const { id } = req.params

    const todo = await Todo.findByPk(id)

    if (!todo) {
      res.status(404).json({ error: 'Todo não encontrado.' })
    }

    return res.status(200).json(todo)
  },

  async store (req, res) {
    const { userId } = req.params
    const { content } = req.body
    delete req.body.id

    const user = await User.findByPk(userId)

    if (!user) {
      res.status(400).json({ error: 'Usuário não encontrado.' })
    }
    const todo = await Todo.create({
      content,
      userId
    })

    return res.status(201).json(todo)
  },

  async update (req, res) {
    const { id } = req.params
    const { content, done } = req.body

    try {
      const updatedTodo = await Todo.update({ content, done }, {
        where: { id }
      })
      return res.status(200).json(updatedTodo)
    } catch (error) {
      return res.status(400).json({ status: 'Falha na alteração.' })
    }
  },

  async delete (req, res) {
    const { id } = req.params
    delete req.body.id

    try {
      const deletedTodo = await Todo.destroy({
        where: { id }
      })

      return res.status(200).json(deletedTodo)
    } catch (err) {
      return res.status(400).json({ status: 'Falha na deleção.' })
    }
  }
}
