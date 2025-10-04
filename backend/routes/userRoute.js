const express=require('express');
const { RegisterUser, Login, Logout } = require('../controller/userController');
const{protect, authorizeRoles} = require('../middleware/authMiddleware');

const router=express.Router();

router.post('/signup',RegisterUser)
router.post('/login',Login)

router.get('/profile',protect,(req,res)=>{
  res.json({ message: "Welcome", user: req.user });
})

router.get('/admin',protect,authorizeRoles("admin"),(req,res)=>{
  res.send("Welcome Admin")
})

router.post('/logout',Logout)

module.exports=router;