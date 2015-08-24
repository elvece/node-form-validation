
function puppyValidate(puppyName, puppyId) {
  var errorArray = [];
  var puppyNameTrimmed = puppyName.trim(); //trims whitespace
  var puppyIdTrimmed = puppyId.trim();

  if(puppyNameTrimmed === '') {
    errorArray.push("Name cannot be blank.");
  }
  if(puppyIdTrimmed === '') {
    errorArray.push('ID cannot be blank.');
  }
  if (puppyIdTrimmed.length < 3) {
    errorArray.push('ID must be at least 3 characters long.');
  }
  return errorArray;
}

function personValidate(firstName, hobby) {
  var errorArray = [];
  var firstNameTrimmed = firstName.trim(); //trims whitespace
  var hobbyTrimmed = hobby.trim();

  if(firstNameTrimmed === '') {
    errorArray.push("Name cannot be blank.");
  }
  if(hobbyTrimmed === '') {
    errorArray.push('Hobby cannot be blank.');
  }
  return errorArray;
}

module.exports = {
  puppyValidate: puppyValidate,
  personValidate: personValidate
};
