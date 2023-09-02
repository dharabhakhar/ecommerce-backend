const { mongoose } = require("mongoose");

module.exports.mongodbvalidateid = (id) => {
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if(!isValid) throw new Error('This Id is Not Valid Or Not Found')
    
}