const Sequelize = require("sequelize");
const config = require('../libs/config');

const User = require('../models/User');
const Todo = require('../models/Todo');

const sequelize = new Sequelize(config);

User.init(sequelize);
Todo.init(sequelize);

Todo.associate(sequelize.models);
User.associate(sequelize.models);

module.exports = sequelize;
