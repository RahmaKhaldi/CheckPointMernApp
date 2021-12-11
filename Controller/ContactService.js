const Contact = require('../Models/Contact')
exports.getAllContacts=async(req,res)=>{
    try {
        const contacts = await Contact.find()
        res.status(200).send({msg:'list contact',contacts})
  
         } catch (error) {
        res.status(500).send('server error')
        console.log("error")
        
    } }

exports.addContact=async(req,res)=>{
    const {name,email,age}=req.body
    try {
        const contact=new Contact({
            name,email,age
        })
        await contact.save()
        res.send({msg:"contact added",contact})
    } catch (error) {
        console.log("error")
        
    }
    
       
    }
exports.getContactById=async(req,res)=>{
    const {contactId}=req.params
       try {
           const contact=await Contact.findById(contactId)
           res.send({msg:"contact:",contact})
       } catch (error) {
        res.status(500).send('server error')
        console.log("error")  
       }
   }

exports.deleteContact=async(req,res)=>{
       try {
           const {contactId}=req.params
           await Contact.findByIdAndDelete(contactId)
        res.status(200).send({msg:'contact deleted'})
      
       } catch (error) {
        res.status(500).send('server error')
        console.log("error")
       }
   }
exports.UpdateContact=async(req,res)=>{
    const {contactId}=req.params
    try {
        const contactUpdate= await Contact.findByIdAndUpdate(contactId,{$set:{...req.body}})
        res.status(200).send({msg:'contact udated',contact:contactUpdate})
    } catch (error) {
        res.status(500).send('server error')
        console.log("error") 
    }
}