const mongoose = require ("mongoose")

const schema = new mongoose.Schema({
    event: String,
    ranking: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        unique: true,
        trim: true,
    },
    dob : Date,
    country: {
       type: String,
       uppercase: true,
       trim: true,       
    },
    score: Number,
})

const model = new mongoose.model("user", schema)

module.exports = model