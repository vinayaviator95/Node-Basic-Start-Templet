// api route file where I will create routes
// need router first thing from express
//SUB ROUTES

const express = require("express")

const router = express.Router() // router is created

router.get("/api",(req, res)=>{
console.log(req.query,"req")
res.status(200).send("success")  // responce back to frontend

})
router.post("/api",(req, res)=>{
    console.log(req.body,"req")
    res.status(200).send("success")  // responce back to frontend
    
    })
    

module.exports = router   // exporting router file can we be done on top and at the bottom
