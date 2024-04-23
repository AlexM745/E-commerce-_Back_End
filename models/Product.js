// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    // id column
    id:{
      type: DataTypes.INTEGER, 
      allowNull: true, 
      primaryKey: false, 
      autoIncrement:true
    }, 
    // product name column
    product_name: {
      type: DataTypes.STRING,
      allowNull:false, 
    }, 
    //price column
    price: {
      type: DataTypes.DECIMAL, 
      allowNull: false, 
      // checks that the data is a decimal
      validate: {
        isDecimal: true
      }
     
    }, 
    //stock column
    stock: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      defaultValue: 10,
      // validates that the data is numeric 
      validate: {
        isNumeric: true
      }
    },
    // this a foregin key that is being added to connect both tables.
    category_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'category',
        key: 'id'
      } 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
