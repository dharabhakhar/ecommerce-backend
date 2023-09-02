var jwt = require('jsonwebtoken');
const register_data = require('../model/index');

 module.exports.register = async(req,res)=>{
    try {
        var email = req.body.email;
        var data = await register_data.find({"email":email});
    
        if(data.length == 0){
            var data = await register_data.create(req.body);
    
            res.status(200).json({
                status:"success",
                data
            })
        }else if(data.length == 1){
            res.status(200).json({
                status:"Email already used"
            })
        }
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}
 module.exports.login = async(req,res)=>{
    try {
        var email = req.body.email;
        var data = await register_data.find({"email":email});
        var token = jwt.sign({id : data[0].id}, 'token');
    
        if(data.length == 1){
            if(data[0].password == req.body.password){
                
                res.status(200).json({
                    status:"success",
                    data,
                    token
                })
            }else{
                res.status(200).json({
                    status:"incorrect password entered"
                })
            }
        }else if(data.length == 0){
            res.status(200).json({
                status:"Incorrect email entered"
            })
        }
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}