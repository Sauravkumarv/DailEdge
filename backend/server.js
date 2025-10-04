const express=require('express');
const dbConnect = require('./config/db');
const cookieParser = require("cookie-parser");
const router = require('./routes/userRoute');
const dotenv=require('dotenv')
const cors=require('cors')
dotenv.config();

const app=express();
dbConnect()
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",   
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json()); 
app.use(express.urlencoded({extended:true}))
app.use('/',router)


const port=process.env.PORT || 5000;

app.listen(port,()=>{
  console.log(`Server is connected on http://localhost:${port}`)
})