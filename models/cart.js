'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.belongsTo(models.Consumer, { foreignKey: 'consumerId' })
      Cart.hasMany(models.Item, { foreignKey: 'cartId' })
    }
  }
  Cart.init(
    {
      consumerId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'consumers',
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
  return Cart
}
