const router = require('express').Router()

router.get('/', function(req, res, next){
	res.render('index')
})

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
  res.render(
    "Error! Help!"
  );
});


module.exports = router
