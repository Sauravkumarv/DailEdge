const USER = require("../model/registerUser");


const { generateAccessToken,generateRefreshToken } = require("../utils/generateToken");

const RegisterUser=async(req,res)=>{
  try {
    const {fullName,email,password}=req.body;

    const check=await USER.findOne({email})

    if(check) return res.status(409).json({success:false,message:"User Already Exists!"})
const newUser=await USER.create({fullName,email,password})

return res.status(201).json({success:true,message:"Registered Successfully",newUser})

  } catch (error) {
    return res.status(500).json({success:false,message:"Registration falied Try again!",error})
  }
}

const Login=async(req,res)=>{
 try {
  const {email,password,role}=req.body;


  const user=await USER.findOne({email})
  if(!user) return res.status(401).json({success:false,message:"User not Found"})
  
  const isMatch=await user.comparePassword(password)
  
  if(!isMatch)return res.status(401).json({ success:false,message: "Invalid Password" });
  
const accessToken=generateAccessToken(user)
const refreshToken=generateRefreshToken(user)

res.cookie("refreshToken",refreshToken,{
  httpOnly: true,
      secure: false,
      sameSite: "strict"
})


  res.json({ success: true,message: "Login successful", accessToken });
 } catch (error) {
  return res.status(500).json({success:false,message:"Login falied Try again!"})
 }
}

const Logout=(req,res)=>{
  try {
    res.clearCookie("refreshToken",{
      httpOnly: true,
        secure: false,
        sameSite: "strict"
    })

    return res.status(200).json({ message: "✅ Logout successful" });
  } catch (error) {
    return res.status(500).json({ message: "Logout Failed", error: error.message });
  }
}



module.exports={RegisterUser,Login,Logout}