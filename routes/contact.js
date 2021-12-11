const express=require('express')
const Contact = require('../Models/Contact')
const{addContact,getAllContacts,getContactById,UpdateContact,deleteContact}=require('../Controller/ContactService')
const router=express.Router()
//test
router.get('/test',(req,res)=>{
    res.send("test")
    console.log("test")
   
})
   //add
   //req.body
  //url:api/contacts/

router.post('/',addContact)
    //getAll,
    //url:api/contacts/
router.get('/',getAllContacts)
   //deleteById
   //params
   //api/contacts/:contactId

router.delete('/:contactId',deleteContact)
   //Update
  //params
  //req.body
  //URL:api/contacts/:contactId

router.put('/:contactId',UpdateContact)
   //getById
   //params
   //URL:api/contacts/:contactId

router.get('/:contactId',getContactById)

module.exports=router