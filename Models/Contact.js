const mongoose=require('mongoose')
const sechma=mongoose.Schema

const contacSechema=new sechma({
    name:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    }
})
module.exports=mongoose.model("Contact",contacSechema);