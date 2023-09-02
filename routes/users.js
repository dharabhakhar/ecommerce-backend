var express = require('express');
const { single_user, add_user, all_user, delete_user, update_user, block_user, unblock_user } = require('../controller/user');
const { checktoken } = require('../middleware/auth');
var router = express.Router();

/* GET users listing. */
router.get('/single_user/:id',checktoken ,single_user);
router.post('/add_user',checktoken ,add_user);
router.get('/all_user',checktoken ,all_user);
router.delete('/delete_user/:id',checktoken ,delete_user);
router.put('/update_user/:id',checktoken ,update_user);
router.put('/block_user/:id',checktoken ,block_user);
router.put('/unblock_user/:id',checktoken ,unblock_user);

module.exports = router;
