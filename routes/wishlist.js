var express = require('express');
var router = express.Router();
const cors = require('cors');
const { checktoken } = require('../middleware/auth');
const { add_list, update_list, delete_list, list_product, all_list } = require('../controller/wishlist');
router.use(cors());

router.post('/',checktoken, add_list);
router.post('/update/:id',checktoken, update_list)
router.delete('/delete/:id',checktoken, delete_list)
router.get('/get/:userId',checktoken, list_product)
router.get('/all',checktoken, all_list)

module.exports = router;