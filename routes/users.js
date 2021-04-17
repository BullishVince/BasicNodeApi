var express = require('express');
const { default: UserService } = require('../services/user-service');
var router = express.Router();

/* GET users listing. */
router.get('/', async(req, res, next) => {
  await UserService
  res.send('respond with a resource');
});

module.exports = router;
