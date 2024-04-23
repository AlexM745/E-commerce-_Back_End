const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    // id columun for catergory table
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement:true
    }, 
    // catergory_name column for category table
    category_name:{
      type: DataTypes.STRING, 
      allowNull:false, 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
