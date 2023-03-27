'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Consumer extends Model {
    static associate(models) {
      Consumer.hasMany(models.Item, { foreignKey: 'userId' })
      Consumer.hasOne(models.Cart, { foreignKey: 'userId' })
    }
  }
  Consumer.init(
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      shoppingCart: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Consumer',
      tableName: 'consumers'
    }
  )
  return Consumer
}
