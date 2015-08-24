var express = require('express');
var router = express.Router();
var utility = require("../utility.js");
var puppies = [];
var people = [];

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
    puppies: puppies,
    success: 'The puppy was saved successfully.'
  });
});

router.post('/submit', function(req, res, next){
  res.render('puppy/new', {
    Title: 'Add a Puppy',
  });
});

router.post('/puppy/new', function(req, res, next){
  var puppyName = req.body.puppyName;
  var puppyId = req.body.puppyId;
  var errors = utility.puppyValidate(puppyName, puppyId);

  if (errors.length > 0){
    res.render('puppy/new', {
      Title: 'Add a Puppy',
      errors: errors
    });
  }
  else {
    puppies.push({
      name: puppyName,
      id: puppyId
    });
    res.redirect('/puppy/puppies');
  }
});



module.exports = router;
