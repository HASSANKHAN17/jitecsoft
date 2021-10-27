const express = require('express')
const bodyParser=require('body-parser')
const cors = require('cors')


const app = express()
app.use(cors())



 app.use(express.static("client/build"))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))   
}

app.listen(process.env.PORT|| 3002,(req,res)=>{
console.log("server started on");
})
