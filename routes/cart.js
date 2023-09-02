var express = require('express');
const { checktoken } = require('../middleware/auth');
const { add_cart, update_cart, delete_cart, cart_product, all_cart } = require('../controller/cart');
var router = express.Router();

/* GET home page. */
router.post('/',checktoken, add_cart)
router.post('/update/:id',checktoken, update_cart)
router.delete('/delete/:id',checktoken, delete_cart)
router.get('/get/:userId',checktoken, cart_product)
router.get('/all',checktoken, all_cart)

module.exports = router;