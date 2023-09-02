var express = require('express');
const { create_product, single_product, all_product, update_product, delete_product, upload_single, special_product, category, popular_product, search_product } = require('../controller/product');
const { checktoken, isAdmin } = require('../middleware/auth');
var router = express.Router();
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true    
    optionSuccessStatus:200
}
router.use(cors(corsOptions));

/* GET home page. */
router.post('/add_product' ,create_product);
router.get('/single_product/:id' ,single_product);
router.get('/all_product',all_product);
router.post('/update_product/:id' ,update_product);
router.delete('/delete_product/:id',delete_product);
router.get('/special_data',special_product);
router.get('/popular_data',popular_product);
router.get('/category',category);
router.get('/search/:key',search_product);


module.exports = router;
