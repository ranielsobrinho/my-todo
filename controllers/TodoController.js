const Todo = require('../models/Todo');
const User = require('../models/User');

module.exports = {
    async index(req, res){
        const { userId } = req.params;
        delete req.body.id;

        const user = await User.findByPk(userId, {
            include: {
                association: 'todos',
                attributes: ['id','content']
            }
        });

        if(!user) {
            res.status(400).json({error : 'User not found.'});
        }

        res.send(user.todos);
    },

    async store(req, res){
        const { userId } = req.params;
        const { content } = req.body;
        delete req.body.id;

        const user = await User.findByPk(userId);

        if(!user){
            res.status(400).json({error: 'User not found.'});
        }
        const todo = await Todo.create({
            content,
            userId
        });

        return res.status(201).json(todo);
    },

    async update( req, res ){
        const {id} = req.params;
        const {content} = req.body;
        delete req.body.id;

        const updatedTodo = await Todo.update({content},{
            where:{id}
        });

        return res.status(200).send('Ok');

    },

    async delete(req, res){
        const { id } = req.params
        delete req.body.id;

        const deletedTodo = await Todo.destroy({
            where: { id }
        })

        return res.status(200).json({status: "Operação feita com sucesso."});
  
    }
}