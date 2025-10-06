const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config();

const secretKey=process.env.SECRET_KEY;
const refreshKey=process.env.REFRESH_KEY;

const generateAccessToken=(user)=>{
  return jwt.sign({id:user._id,role:user.role,name:user.fullName},secretKey,{expiresIn:"15m"})
};


const generateRefreshToken=(user)=>{
  return jwt.sign({id:user._id,role:user.role,name:user.fullName},refreshKey,{expiresIn:"7d"})
}

module.exports={generateAccessToken,generateRefreshToken}