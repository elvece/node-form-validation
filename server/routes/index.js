var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pups and Peeps' });
});

router.get('/new', function(req, res, next){
  res.render('puppy.new', {
    title: 'Add a Puppy'
  });
});

router.get('/submit', function(req, res, next){
  res.render('new', {
    Title: 'Add a Puppy',
  });
});







module.exports = router;
