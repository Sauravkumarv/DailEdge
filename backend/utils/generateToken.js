const jwt=require('jsonwebtoken')


const secretKey="Rahufht444#43%5467"
const refreshKey="9885695df324%$%&"

const generateAccessToken=(user)=>{
  return jwt.sign({id:user._id,role:user.role},secretKey,{expiresIn:"15m"})
};


const generateRefreshToken=(user)=>{
  return jwt.sign({id:user._id,role:user.role},refreshKey,{expiresIn:"7d"})
}

module.exports={generateAccessToken,generateRefreshToken}