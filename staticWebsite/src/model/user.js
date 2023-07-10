const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
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
    }
})

const model = new mongoose.model("user", userSchema)
module.exports = model