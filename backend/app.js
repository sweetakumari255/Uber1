const dotenv=require('dotenv');
dotenv.config();

const express=require('express');
const app=express();
const ap
 


app.get('/',(req,res)=>{
    res.send('hello');
});

module.exports=app;
