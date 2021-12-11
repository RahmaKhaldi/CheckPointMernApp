const express= require('express')
const app=express()
const connectDb=require('./config/db')
const contactRoutes=require('./routes/contact')


connectDb()
app.use(express.json())
app.use('/api/contacts',contactRoutes)
const port =500
app.listen(port,()=>{console.log(`server runing on port ${port}`)})
