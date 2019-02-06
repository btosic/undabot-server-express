var express = require('express');
var contactValidator = require('../validators/contact');

var router = express.Router();

/* POST contact data */
router.post('/', (req, res, next) => {
  let validationResult = contactValidator.validateContact(req.body);
  if (validationResult.valid) {
    // Return status OK and received message
    res.status(200).send(req.body);
  } else {
    // Return error(s), figure out status code based on this logic:
    // 1. If only one error use that error's status code
    // 2. If multiple errors use status code 400
    let result = {
      errors: validationResult.errors
    };
    if (result.errors.length && result.errors.length === 1) {
      res.status(result.errors[0].code).send(result);
    } else {
      res.status(400).send(result);
    }
  }
});

module.exports = router;
