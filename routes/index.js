var express = require('express');
const { register, login } = require('../controller/index');
var router = express.Router();
const cors = require('cors');
router.use(cors());

/* GET home page. */
router.post('/', register);
router.post('/login', login);


module.exports = router;
