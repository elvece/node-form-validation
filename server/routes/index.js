var express = require('express');
var router = express.Router();

var puppies = [];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pups and Peeps' });
});

router.get('/puppy/new', function(req, res, next){
  res.render('puppy/new', {
    Title: 'Add a Puppy'
  });
});

router.get('/puppy/puppies', function(req, res, next){
  res.render('puppy/puppies', {
    Title: 'All the Puppies',
    puppies: puppies
  });
});

router.post('/submit', function(req, res, next){
  res.render('puppy/new', {
    Title: 'Add a Puppy',
  });
});

router.post('/puppy/new', function(req, res, next){
  puppies.push({
    name: req.body.puppyName,
    id: req.body.puppyId
  });
  res.redirect('/puppy/puppies', {
    success: 'The puppy was successfully saved.'
  });
});




module.exports = router;
