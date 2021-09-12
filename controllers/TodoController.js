const Todo = require('../models/Todo');
const User = require('../models/User');

module.exports = {
    async index(req, res){

    },
    async store(req, res){
        const { user_id } = req.params;
        const { content } = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            res.status(400).json({error: 'User not found.'});
        }
        const todo = await Todo.create({
            content,
            user_id
        });

        return res.json(todo);
    }
}