const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const port = 8000

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))
app.use(express.urlencoded({extended: true}))

// PUG SPECIFIC STUFF
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.post('/', (req, res)=>{
    console.log(req.body)

    name = req.body.name
    email = req.body.email
    password = req.body.password
    message = req.body.message

    let OutputToWrite = `The client name is ${name}, email: ${email}, password: ${password}, & more about him/her: ${message}`
    fs.writeFileSync('output.txt', OutputToWrite)

    let params = {message: 'The form has been submitted successfully'}
    res.status(200).render('index.pug', params) 
})

// SERVER START
app.listen(port, () => {
    console.log(`start the server successfully on port ${port}`)
})