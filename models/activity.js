const Sequelize = require('sequelize')
const db = require('./index.js');
const Place = require('./place.js');

// Define Activity
const Activity = db.define('activity',{
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age_range: {
    type: Sequelize.STRING
  }
})

Activity.belongsTo(Place);

module.exports = Activity;
