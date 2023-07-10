const express = require("express")
const app = express()
require("./database/connect")
const router = require("./router/userRouter")
const port = process.env.PORT || 80

app.use(express.json())
app.use(router)

app.listen(port, ()=>{
    console.log(`The application started successfully ${port}`)
})