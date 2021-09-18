const jwt = require('jwt-simple');
const config = require('../libs/config');
const User = require('../models/User');

module.exports = {
    async token(req, res){
        const {email} = req.body;

        const userToken = await User.findOne({where:{email}})
        .then(user => {
            if(!user){
                res.status(400).json({error: 'User not found'});
            }
            const payload = {id: user.id};
            res.json({
                token: jwt.encode(payload, config.jwtSecret)
            })
        }).catch((error) => res.send(error))

        return res.send(userToken);
    },
}
