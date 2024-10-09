const express=require("express");
const mongoose=require("mongoose");
const app= express()

const route=require('./routes/courseRoutes');
app.use('/crap',route);  
require('dotenv').config();  
const PORT=process.env.PORT;
require('./connection')



app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})