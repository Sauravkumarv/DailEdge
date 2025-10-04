const jwt=require('jsonwebtoken')


const secretKey="Rahufht444#43%5467"


const protect=(req,res,next)=>{
  const authHeader=req.headers["authorization"];

  const token=authHeader && authHeader.split(" ")[1];

  if(!token)return res.status(401).json({ message: "No token provided" });

  jwt.verify(token,secretKey,(err,decoded)=>{
    if (err) return res.status(403).json({ message: "Token invalid or expired" });
    req.user = decoded;
    next();
  })
}

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    try {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: "Access Denied" });
      }
      next(); // agar role match karta hai to next middleware/route pe jao
    } catch (error) {
      return res.status(500).json({ message: "Server Error", error: error.message });
    }
  };
};

module.exports={protect,authorizeRoles}