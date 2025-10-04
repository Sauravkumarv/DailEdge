const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config();

const mongoUrl=process.env.MONGO_URL

const dbConnect=async()=>{
  try {
   await mongoose.connect(mongoUrl)
   console.log("mongo Connected Successfully")
  } catch (error) {
    return console.log("mongo connection failed",error)
  }
}

module.exports=dbConnect;