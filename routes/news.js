var express = require('express');
var router = express.Router();
const { all_news, create_news, single_news } = require('../controller/news');
module.exports = router;
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true    
    optionSuccessStatus:200
}
router.use(cors(corsOptions));

router.get('/all_news',all_news);
router.post('/',create_news);
router.get('/single_news/:id',single_news);