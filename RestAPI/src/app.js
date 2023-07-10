const express = require('express')
require("./database/connect")
const router = require("./router/userRouter")
const app = express()
const port = process.env.PORT || 80

app.use(express.json()) // This is the middleware function to parse the incoming request with JSON payloads
app.use(router)

// app.get('/', (req, res) => {
//     res.send("This is the home page of the express app")
// })

// delete collection
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
})