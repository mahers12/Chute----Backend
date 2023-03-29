'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.belongsTo(models.Consumer, { foreignKey: 'consumerId' })
    }
  }

  Item.init(
    {
      name: DataTypes.STRING,
      consumerId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'consumers',
          key: 'id'
        }
      },
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Item',
      tableName: 'items'
    }
  )

  return Item
}
