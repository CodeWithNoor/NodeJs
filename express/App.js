// const express = require('express')
// const app = express()
// const path = require('path')
// const port = 80

// for serving static files
// app.use('/static', express.static('static'))

// set the template engine as pug
// app.set('view engine', 'pug')

// set the view directory
// app.set('views', path.join(__dirname, 'views'))

// our pug demo end point
// app.get('/index', (req, res)=>{
   // res.status(200).render('index', {title: 'Hi', message: 'Hello there...!'})
// })

// app.get('/', (req, res)=>{
   // es.status(200).send('This is a home page')
// })

// app.get("/about", (req, res)=>{
   // res.status(200).send("This a about page")
// })

// app.post("/about", (req, res)=>{
   // res.status(200).send("This is a post request about page")
// })

// app.get('/this', (req, res)=>{
   // res.status(404).send('page was not found')
// })

// app.listen(port, ()=>{
   // console.log(`The application was started successfully on port ${port}`)
// })

// ******************************************************************************************
// The callback function has two parameters request, response 
// The request object represents the http request & has property for the request query strings, parameter, body, HTTP headers etc.
// The response object represents the HTTP response.
// That the express app sends when it receives HTTP request.

// const express = require('express')
// const app = express()
// const port = 80

// app.get('/', (req, res) => {
//    res.send("Hello world")
// })

// app.get('/temp', (req, res) => {
//    res.send({ id: 4})
//    res.send([{id: 1}, {id: 2}, {id: 3}])
//    res.json([{id: 1}, {id: 2}, {id: 3}])
// })

// app.listen(port, () => {
//    console.log("Server start successfullly")
// })

// ************************************************************************
const express = require('express')
const app = express()
const path = require('path')
const fs = require("fs")
const port = 80

// EXPRESS SPECIFIC STUFF
// SERVING STATIC FILES IN EXPRESS
// Express.static built-in middleware

app.use('/static', express.static('static'))
app.use(express.urlencoded({ extended: true }))

// PUG SPECIFIC STUFF
// There are three template engine
//  1. hbs 2. pug 3. ejs 
app.set('view engine', 'pug')   // for serving static files
app.set('views', path.join(__dirname, 'views'))  // set the view directory

// ENDPOINTS
// ---> GET METHOD
app.get('/', (req, res)=>{
   let content = 'Best content on the internet so far used it wisely'
   let params = {'title': 'PUG', content}
   res.status(200).render('demo.pug', params)
})

app.get('/about/*', (req, res) => {
   res.send("404 Error")
})

app.get('*', (req, res) => {
   res.status (404).send("404 error page doesn't exsist")
})

// ---> POST METHOD
app.post('/', (req, res)=>{
   // console.log(req.body)
   name = req.body.name
   age = req.body.age
   gender = req.body.gender
   message = req.body.message

   let OutputToWrite = `The name of the client is ${name}, ${age} year old, ${gender} & more about him/her: ${message}`
   fs.writeFileSync('output.txt', OutputToWrite)

   let params = {message: 'This form has been submitted successfully'} 
   res.status(200).render("demo.pug", params) 
})

// START THE SERVER
app.listen(port, ()=>{
   console.log(`The application was started successfully on port ${port}`)
})
