const User = require('../models/User')

module.exports = {
    async index(req, res){
        const users = await User.findAll();
        return res.json(users);
    },

    async store (req, res) {
        const { name, email } = req.body;
        delete req.body.id;

        const user = await User.create({ name, email });

        return res.json(user);
    }, catch(error){
        console.error(error);
    },
    
    async update( req, res ){
        const { id } = req.params;
        const { name, email } = req.body;
        delete req.body.id;

        const updatedUser = await User.update({name, email},{
            where: {id}
        });

        return res.status(200).send('Ok');
    },
    async delete(req, res){
        const {id} = req.params;
        delete req.body.id;

        const deletedUser = await User.destroy({
            where: {id}
        });

        res.status(200).json({status:'Operação feita com sucesso'});
    }
}