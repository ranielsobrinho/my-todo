const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
    async index(req, res){
        const users = await User.findAll();
        return res.json(users);
    },

    async user(req, res){
        const {id} = req.params;

        const user = await User.findOne({
            where:{id},
            include: 'todos'});
        res.send(user);
    },

    async store (req, res) {
        const { name, email } = req.body;
        delete req.body.id;
        const saltRounds = 10;
        
        const salt = bcrypt.genSaltSync(saltRounds);
        const password = bcrypt.hashSync(req.body.password, salt)
        const user = await User.create({ name, email, password });

        return res.json(user);
    }, catch(error){
        console.error(error);
    },
    
    async update( req, res ){
        const { id } = req.params;
        const { name, email, senha } = req.body;
        delete req.body.id;

        const updatedUser = await User.update({name, email, senha},{
            where: {id}
        });

        return res.status(200).send('Ok');
    },
    async delete(req, res){
        const {id} = req.params;
        delete req.body.id;

        const user = await User.findOne({where:{id}});

        if (!user) {
            return res.status(404).json({message: 'User not found'})
        }

        const deletedUser = await User.destroy({
            where: {id}
        });

        return res.status(200).json({status:'Operação feita com sucesso'});
    }
}