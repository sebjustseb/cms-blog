// Import Sequelize and database connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define Post model
class Post extends Model {}

// Define Post model fields
Post.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'Post'
  }
);

module.exports = Post;
