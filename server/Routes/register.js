const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/register',async(req,res)=>{
    const {username,email,password} = req.body
    try {
        const exsisting_user = await User.findOne({$or:[{username},{password}]})
        if(exsisting_user){
            return res.status(400).json({message:"User already exists"})
        }
        else{
            const hashPassword = await bcrypt.hash(password,10)
            const newUser = new User({
                username,
                email,
                password:hashPassword
            })
            await newUser.save()
            res.status(201).json({message:"User created successfully"})
        }
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
})

module.exports = router;