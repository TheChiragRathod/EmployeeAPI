const express=require('express')
const mongoose = require('mongoose')
const route = require("./route")

                                    //give database name here...
mongoose.connect("mongodb+srv://Chirag:Star@456@cluster0.thc18.mongodb.net/Employee?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>
    {
        const app=express();
        app.use("",route)

        app.listen(process.env.PORT || 3000,()=>{
            console.log("Server started!...")
        })
    }
)