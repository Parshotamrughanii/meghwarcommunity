const express = require('express')

const user = require('../models/userModels')

const getUser = async(req,res)=>{

    const getUsers = await user.find()
    res.send(getUsers)
}

const createUser = async(req,res)=>{
   const setUser = await user.create({
    text:req.body.text
   })
   res.status(200).json(setUser)
}


const updateUser = async(req,res)=>{
   try {
    const userUpdate =  await user.findById(req.params.id)
    if(!userUpdate){
        res.status(400).json({message:"User not FOund"})
    }
    const updateUniqueUser = await user.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    res.send(updateUniqueUser)
    
   } catch (error) {
    res.status(500).json({message:error})

   }
}

const deleteUser = async(req,res)=>{
    const users =  await user.findById(req.params.id)
    if(!users){
        res.status(400).json({message:"User not FOund"})
    }
    await users.remove()
    res.status(400).json({id:req.params.id})
}
module.exports = {getUser,createUser,updateUser,deleteUser}