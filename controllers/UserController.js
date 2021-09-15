const User = require('../models/User')

module.exports = {
    async index(req, res){
        const users = await User.findAll();
        return res.json(users);
    },

    async store (req, res) {
        const { name, email } = req.body;

        const user = await User.create({ name, email });

        return res.json(user);
    }, catch(error){
        console.error(error);
    },
    
    async update( req, res ){

        const updatedUser = await User.update({name, email},{
            where: {id}
        });

        return res.status(200).send('Ok');
    },
    async delete(req, res){
        
    }
}