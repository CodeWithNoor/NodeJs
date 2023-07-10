require('dotenv').config() // zero dependency module to load environment variables from a .env file into process.env
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
    },
    confirmpassword: {
        type: String,
    },
    tokens: [{
        token: {
            type: String,
        }
    }]
})

// this is a method to generate token for the user 
userSchema.methods.generateAuthToken = async function () { 

    // Algorithm: is HS256 by default, you can change it to RS256 or ES256 
    // Payload: is the data you want to send to the user, secret key is the key to encrypt the data 
    // Verify Signature: is to verify the token, you can set it to false if you don't want to verify the token

    try {
        // console.log(`process.env.SECRET_KEY` + process.env.SECRET_KEY) // ---> this is to check if the secret key is set or not 
        const token = await jwt.sign({_id: this.id}, process.env.SECRET_KEY) 
        this.tokens = this.tokens.concat({token})
        await this.save()
        return token
    } catch (error) {
        console.log(`The error part` + error)
    }
}

userSchema.pre("save", async function (next) { 
    if (this.isModified("password")) { // this is important to check if the password is modified or not
        this.password = await bcrypt.hash(this.password, 10) // round of salt is 10 
        this.confirmpassword = await bcrypt.hash(this.confirmpassword, 10)
    }  
    next() // this is important to move to next middleware or function in the stack 
})

const model = new mongoose.model("user", userSchema)

module.exports = model