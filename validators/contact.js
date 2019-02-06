var validator = require('validator');

module.exports.validateContact = (data) => {
  // Possible to have multiple validation errors so array is used
  let result = {
    valid: true,
    errors: []
  };
  function addError(code, field, message) {
    result.valid = false;
    let error = {
      code,
      field,
      message
    }
    result.errors.push(error);
  }
  if (data) {
    // Check e-mail
    if (!data.email) {
      addError(400, 'email', 'E-mail address is required.');
    } else if (!validator.isEmail(data.email)) {
      addError(422, 'email', 'Invalid e-mail address.');
    }
    // Check message
    if (!data.message) {
      addError(400, 'message', 'Message is required.');
    } else if (data.message.length <= 30) {
      addError(422, 'message', 'Message must contain more that 30 characters.');
    }
  } else {
    addError(400, 'Missing contact data.');
  }
  return result;
}