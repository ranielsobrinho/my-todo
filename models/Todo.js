const { Model, DataTypes } = require('sequelize')

class Todo extends Model {
  static init (sequelize) {
    super.init(
      {
        content: DataTypes.STRING,
        done: DataTypes.BOOLEAN
      },
      {
        sequelize
      }
    )
  }

  static associate (models) {
    this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
  }
}

module.exports = Todo
