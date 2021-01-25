const express=require('express')
const mongoose = require('mongoose')
const route = require("./route")

                                    //give database name here...
mongoose.connect("mongodb://localhost:27017/Employee",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>
    {
        const app=express();
        app.use("",route)

        app.listen(3000,()=>{
            console.log("Server started!...")
        })
    }
)