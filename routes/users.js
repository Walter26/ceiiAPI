var express = require('express');
var router = express.Router();

var UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/:usrname', UserController.getOne);
router.get('/', UserController.getAll);
router.post('/', UserController.addUser)
module.exports = router;
