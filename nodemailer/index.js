const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
    res.status(200).send("Create a Nodemailer transporter using either SMTP or some other transport mechanism")
})
 
const start = async ()=> {
    try {
        app.listen(port, () => {
            console.log(`server start successfully ${port}`)
        })
    } catch (error) {
  
    }
}

start()