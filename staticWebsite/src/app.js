const express = require("express")
const app = express()
require('./db/connect.js')
const model = require("./model/user.js")
const path = require("path")
const port = process.env.PORT || 80
const bcrypt = require('bcrypt');

app.use(express.static(path.join(__dirname, "../template/views")))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// template engine


app.set('views engine', 'hbs')
app.set('views', path.join(__dirname, "../template/views"))

app.get("/registration", async (req, res) => {
    res.status(200).render("registration.hbs")
})

app.get("/login", async (req, res) => {
    res.status(200).render("login.hbs")
})

app.post("/registration", async(req, res) => {
    try {
        const password = req.body.password
        const confirmPassword = req.body.confirmpassword 

        if(password === confirmPassword){ 
            const userRegistration = new model({
                name: req.body.name,
                email: req.body.email,
                password,
                confirmPassword
            })

            const registered = await userRegistration.save()
            res.status(200).render("index.hbs")
        }res.status(400).send("Password are not matching")
        
    } catch (error) {
        res.status(400).send("Invalid Registration")
    }
})

app.post("/login", async(req, res) => {
    try {
        const email = req.body.email 
        const password = req.body.password 

        const userLogin = await model.findOne({email})
        if(userLogin.password === password){
            res.status(201).render("index.hbs")
        }res.status(400).send("Invalid Login id or password")
    
    } catch (error) {
        res.status(400).send("Invalid Login Details")
    }
})

app.get('/', (req, res) => {
    res.status(200).render("index.hbs")
})

app.get("*", (req, res) => {
    res.send("404 Error Page Not Found")
})

const securePassword = async(password) => {
    const hashPassword = await bcrypt.hash(password, 10)
    console.log(hashPassword)

    const passwordMatch = await bcrypt.compare(password, hashPassword)
    console.log(passwordMatch)
}
securePassword("123@786")

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
})