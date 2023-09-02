var jwt = require('jsonwebtoken');

const checktoken = async(req,res,next)=>{
   var token = await jwt.verify(req.headers.authorization, 'token',next);
}

module.exports={
    checktoken,
    // isAdmin
}