var express = require('express');
const { checktoken } = require('../middleware/auth');
const { add_order, delete_order, update_order, order_product, all_order, month_income } = require('../controller/order');
var router = express.Router();

/* GET home page. */
router.post('/',checktoken, add_order)
router.delete('/delete/:id',checktoken, delete_order)
router.post('/update/:id',checktoken, update_order)
router.get('/get/:userId',checktoken, order_product)
router.get('/all',checktoken, all_order)
router.get('/income ',checktoken, month_income)

module.exports = router;