const express = require('express');
const mongoose= require('mongoose');
require('dotenv').config()

const app =express();
const PORT = process.env.PORT || 5000;  // Choose your Port address

app.get('/', (req,res)=>{
    res.json({msg:"This is the End"})
})

app.listen(PORT,()=>{
    console.log("Server running");
})

app.use('/user',require('./routes/useRouter.js'))


// mongodb
const URI = process.env.MONGODB_URL;  // make .env as enviroment variable
console.log(process.env.MONGODB_URL);


mongoose.connect(URI,{
    useCreateIndex: true,
    useFindAndModify:false,
    useNewURLParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Mongodb connected");
}).catch(err =>{
    console.log(err);
})
