const mongoose = require('mongoose')
const validator = require ('validator') 

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
       validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Email is not valid")
        }
       }
    },
    program: {
        type: String
    }
})

const model = new mongoose.model('collection', schema)

module.exports = model
