var express = require('express');
var router = express.Router();
var utility = require("../logic/utility.js");
var puppies = [];
var people = [];

//main page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pups and Peeps' });
});

////////////
//PUPPIES//
//////////

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

///////////
//PEOPLE//
/////////

router.get('/person/new', function(req, res, next){
  res.render('person/new', {
    Title: 'Add a Person'
  });
});

router.get('/person/people', function(req, res, next){
  res.render('person/people', {
    Title: 'All the People',
    people: people,
    success: 'The person was saved successfully.'
  });
});

router.post('/submit', function(req, res, next){
  res.render('person/new', {
    Title: 'Add a Person',
  });
});

router.post('/person/new', function(req, res, next){
  var firstName = req.body.firstName;
  var hobby = req.body.hobby;
  var errors = utility.personValidate(firstName, hobby);

  if (errors.length > 0){
    res.render('person/new', {
      Title: 'Add a Person',
      errors: errors
    });
  }
  else {
    people.push({
      name: firstName,
      hobby: hobby
    });
    res.redirect('/person/people');
  }
});

module.exports = router;
