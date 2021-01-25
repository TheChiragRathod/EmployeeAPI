const express = require("express")
const ModelEmp=require("./Model/employee")

const router=express.Router()

router.get("/emp",async (req,res)=>{

    const employee = await ModelEmp.find();
    res.send(employee)

})

module.exports=router