const router = require('express').Router()
const Hotel = require('../models/hotel');
const Place = require('../models/place');
const Activity = require('../models/activity')
const Restaurant = require('../models/restaurant');
//const initialize_gmaps = require('../public/map.js');

router.get('/', function(req, res, next){

  //initialize_gmaps();
  var allHotels = Hotel.findAll({});
  var allActivities = Activity.findAll({});
  var allRestaurants = Restaurant.findAll({});
  Promise.all([allHotels, allActivities, allRestaurants])
    .then(function(allThings){ //allThings is an array of the hotel, place, restaurants arrays
      hotelsToRender = allThings[0];
      activitiesToRender = allThings[1];
      restaurantsToRender = allThings[2];
      res.render('index', {hotels:hotelsToRender, activities: activitiesToRender, restaurants: restaurantsToRender })
    })

});


// catch 404 (i.e., no route was hit) and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
router.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.send(err,
    "Error! Help!"
  );
});




module.exports = router
