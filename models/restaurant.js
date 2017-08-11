const Sequelize = require('sequelize')
const db = require('./index.js');
const Place = require('./place.js');

// Define Restaurant
const Restaurant = db.define('restaurant',{
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {min: 1, max: 5}
  }
})

Restaurant.belongsTo(Place);

module.exports = Restaurant;
