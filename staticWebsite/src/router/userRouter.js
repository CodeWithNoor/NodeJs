
const bcrypt = require('bcrypt');

app.set('views engine', 'hbs')
app.set('views', path.join(__dirname, "../template/views"))

router.get("/registration", async (req, res) => {
    res.status(200).render("registration.hbs")
})

router.get("/login", async (req, res) => {
    res.status(200).render("login.hbs")
})

router.post("/registration", async(req, res) => {
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

router.post("/login", async(req, res) => {
    try {
        const email = req.body.email 
        const password = req.body.password 

        const userLogin = await model.findOne({email})
        if(userLogin.password === password){
            res.status(201).render("index.hbs")
        }res.status(400).send("Invalid Login id os password")
    
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

