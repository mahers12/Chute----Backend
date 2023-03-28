'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    static associate(models) {
      item.belongsTo(models.Consumer, { foreignKey: 'consumerId' })
    }
  }
  item.init(
    {
      name: DataTypes.STRING,
      consumerId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'consumer',
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
  return item
}
