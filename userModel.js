const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    }
},{
    timestamps:true,
    versionkey:false
});

module.exports=mongoose.model('user',userSchema)