const { user_data } = require("../model/user");
const { mongodbvalidateid } = require("../utility/mogodbvalidateid");

module.exports.single_user = async (req, res) => {
    try {
        var id = req.params.id;
        var data = await user_data.find({"_id":id});
        mongodbvalidateid(id);

        res.status(200).json({
            status: "success",
            data
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}

module.exports.all_user = async(req,res)=>{
    try {
    
        var all_user_data = await user_data.find();

        res.status(200).json({
            status:"success",
            all_user_data
        })

    } catch (error) {
        error
    }
}

module.exports.delete_user = async(req,res)=>{
    try {
    
        var delete_data = await user_data.findByIdAndDelete({"_id":req.params.id});

        res.status(200).json({
            status:"success",
            delete_data
        })

    } catch (error) {
        error
    }
}
module.exports.update_user = async(req,res)=>{
    try {
        var id = req.params.id
        await user_data.findByIdAndUpdate({"_id":id},req.body,{new:true});
        var update_data = await user_data.findByIdAndUpdate({"_id":req.params.id});
        mongodbvalidateid(id);

        res.status(200).json({
            status:"success",
            update_data
        })

    } catch (error) {
        error
    }
}

module.exports.add_user = async(req,res) =>{
    try {
        var data = await user_data.create(req.body);

        res.status(200).json({
            status:"success",
            data
        })
    } catch (error) {
        error
    }
}
module.exports.block_user = async(req,res) =>{
    try {
        var id = req.params.id;
        await user_data.findByIdAndUpdate({"_id":req.params.id},{"isBlocked":true});
        var block_data = await user_data.findByIdAndUpdate({"_id":id});
        mongodbvalidateid(id);

        res.status(200).json({
            status:"success",
            block_data
        })
    } catch (error) {
        error
    }
}
module.exports.unblock_user = async(req,res) =>{
    try {
        var id= req.params.id
        await user_data.findByIdAndUpdate({"_id":id},{"isBlocked":false});
        var unblock_data = await user_data.findByIdAndUpdate({"_id":req.params.id});
        mongodbvalidateid(id);

        res.status(200).json({
            status:"success",
            unblock_data
        })
    } catch (error) {
        error
    }
}