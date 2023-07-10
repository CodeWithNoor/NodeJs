const express = require('express')
const app = express()
const port = process.env.PORT || 80
require("./database/connect")
const User = require("./model/user")
const path = require("path")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken") // for generating token

app.use(express.static(path.join(__dirname, '../views')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'hbs')   // for serving static files
app.set('views', path.join(__dirname, '../views'))  // set the view directory

app.get("/", (req, res) => {
    res.status(200).render("index.hbs")
})

app.get("/registration", (req, res) => {
    res.status(200).render("registration.hbs")
})

app.get("/login", (req, res) => {
    res.status(200).render("login.hbs")
})

app.post("/registration", async(req, res) => {
    try { 
        const password = req.body.password
        const cpassword = req.body.confirmpassword

        if(password === cpassword){
            const user = new User({
                name : req.body.name,
                email : req.body.email,
                password : password,
                confirmpassword : cpassword
        })

            const token = await user.generateAuthToken()
            console.log(`The token part` + token)

            // cookie ---> to store the data in the browser of the user 
            res.cookie("jwt", token, { // this is to set the cookie for the user 
                expires: new Date(Date.now() + 30000),  // after 30 seconds the cookie will expire
                httpOnly: true 
            })
            // console.log( `The cookie part` + cookie)

            const result = await user.save()      
            res.status(200).render("login.hbs")
        }else { 
            res.status(400).send("Password are not matching")
        }    
    } catch (error) {
        res.status(400).send('Invalid data') 
    }
})

app.post("/login", async(req, res) => {
    try {
        const email = req.body.email 
        const password = req.body.password
    
        const userLogin = await User.findOne({email})
        const isMatch = await bcrypt.compare(password, userLogin.password)

        const token = await userLogin.generateAuthToken() // this is to generate token for the user 
        console.log(`The token part ` + token)

        res.cookie('jwt', token , {
            expires: new Date(Date.now() + 30000), // after 30 seconds the cookie will expire
            httpOnly: true,
            // secure: true 
        })

        if(isMatch === true){
            res.status(200).render("index.hbs")
        }else{
            res.status(400).send("Invalid login details")
        }    
    } catch (error) {
        res.status(400).send('Invalid data', error) 
    }
})

// json web token generation & verification
// const createToken = async () => {
//     const token = await jwt.sign({_id: '64389a9744fefd77b3a67c8c'}, 'jsonwebtokenizing', {
//         expiresIn: '2 minutes'
//     })
//     console.log(token)

//     const verifyToken = await jwt.verify(token, 'jsonwebtokenizing')
//     console.log(verifyToken)
// }
// createToken()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})