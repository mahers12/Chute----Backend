'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    static associate(models) {
      cart.belongsTo(models.consumer, { foreignKey: 'consumerId' })
      cart.hasMany(models.item, { foreignKey: 'consumerId' })
    }
  }
  cart.init(
    {
      consumerId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'consumer',
          key: 'id'
        }
      },
      product: DataTypes.STRING,
      payment: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Cart',
      tableName: 'carts'
    }
  )
  return cart
}
