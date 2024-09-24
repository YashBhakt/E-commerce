const express = require('express');
const mongoose= require('mongoose');
require('dotenv').config()

const app =express();
const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.json({msg:"This is the End"})
})

app.listen(PORT,()=>{
    console.log("Server running");
})

app.use('/user',require('./routes/useRouter.js'))


// mongodb
const URI = process.env.MONGODB_URL;
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
