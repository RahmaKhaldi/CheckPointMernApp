const mongoose=require('mongoose');
require('dotenv').config({path:'./config/.env'})

const connectDb= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db  connected")   
    } catch (error) {
      console.log("db not connected")  
    }
}
module.exports = connectDb