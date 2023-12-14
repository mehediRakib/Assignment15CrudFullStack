const express=require('express');
const app=new express();
const bodyParser=require('body-parser');
const helmet=require('helmet');
const hpp=require('hpp');
const xss=require('xss');
const mongoSanitize=require('express-mongo-sanitize');
const rateLimit=require('express-rate-limit');
const cors=require('cors');
const mongoose=require('mongoose');
const router=require('./src/routes/api')



//security Middleware implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({limit:"50mb"}));

//body-parser Implementation
app.use(bodyParser.json());


//rate limit implementation
 const limiter=rateLimit({
     windowMs:15*60*1000,
     max:100
 })
app.use(limiter)

//database Connection
const URL="mongodb://localhost:27017/CRUDFullStack";

const option = {
    user:'', pass:''
};

mongoose.connect(URL,option)
    .then(()=>{
        console.log("connction established")
    })
    .catch((e)=>{
        console.log(e);
    })



//Base URL
app.use('/api/v1',router);


 //handling  unknown route
 app.get("*",(req,res)=>{
     res.status(200).json({status:"404",data:"not found"})
 })




module.exports=app;