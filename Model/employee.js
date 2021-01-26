const mongoose=require('mongoose')

const schema = mongoose.Schema(
    {
        name:String,
        email:String
    }
)                            //give collection name...
module.exports = mongoose.model("colemps",schema)
