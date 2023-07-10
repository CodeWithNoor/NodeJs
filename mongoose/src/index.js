const mongoose = require ("mongoose")
const validator = require("validator")

mongoose.connect("mongodb://localhost:27017/docs", {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    family: 4
})
.then(() => console.log("connect successfully"))
.catch((error) => console.log(error))

// schema create document
const schema = new mongoose.Schema({
    // built in validators
    title: {
    type: String,
    maxLength: 20,
    minLength: 5,
    lowercase: true,
    trim: true,
    // enum: ['JavaScript', 'React Js', 'Node Js', 'Express Js', 'MongoDB'] 
    },
    course_type: {
        type: String,
    }, 

    // custom validators
    tuts: {
        type: Number,
        validate(value) {
            if(value < 0) {
                throw new Error("Tuts should be positive number")
            }
        }
    },
    author: {
        type: String,
        validate(value) {
            if(value.length < 3) {
                throw new Error("Author name should be greater than 3 characters")
            }
        }
    },
    email: {
        type: String,
        allow_utf8_local_part: true,
        host_whitelist: ['gmail.com', 'yahoo.com', 'hotmail.com'],
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Email is not valid")
            }
        }

    },
    password: {
        type: String,
        validate(value) {
            if(!validator.isStrongPassword(value)) {
                throw new Error("Password is not strong")
            }
        }
    }
})

// create a model
const model = new mongoose.model('collection', schema)

// CRUD OPERATIONS
// create document

const createDocument = async () => {
    try {
    const JavaScript = new model({
        title: 'JavaScript',
        course_type: "FRontend",
        tuts: 60,
        author: 'Anonymous',
        email: 'ali@gmail.com'
    })    
    const React_js = new model({
        title: 'React Js',
        course_type: 'Frontend',
        tuts: 50,
        author: 'Anonymous'
    })    
    const Node_js = new model({
        title: 'Node Js',
        course_type: 'Backend',
        tuts: 50,
        author: 'Anonymous'
    })    
    const Express_js = new model({
        title: 'Express Js'   ,
        course_type: 'Backend',
        tuts: 45,
        author: 'Anonymous'
    })    
    const MongoDB = new model({
        title: 'MongoDB',
        course_type: 'Backend',
        tuts: 70,
        author: 'Anonymous',
        password: 'chaosCorp*786'
    })    

    const result = await model.insertMany([JavaScript, React_js, Node_js, Express_js, MongoDB])
    console.log(result)
    } catch (error) {
        console.log(error)
    }
}
// createDocument()
console.log("Documents create successfully")

// Read Document
const readDocument = async () => {
    try {
       const res = await model.find({title: 'React Js'}).limit(1).select({title: 1, course_type: 1})
       console.log(res)
    } catch (error) {
        console.log(error)
    }
}
// readDocument()

// logical & comparision operators 
const logicalOperator = async () => {
    try {
        const logicalOperators = await model.find({tuts : {$lt: 60}})
        console.log(logicalOperators)
    } catch (error) {
        console.log(error)
    }
}
// logicalOperator()

const comparisionOperator = async () => {
    try {
        const logicalOperators = await model.find({$and: [{course_type: 'Frontend'}, {author: 'Anonymous'}]})
        console.log(logicalOperators)
    } catch (error) {
        console.log(error)
    }
}
// comparisionOperator()

console.log("Read the documents successfully")

// update document
const updateDocument = async (_id) => {
    try {
        const updateData = await model.findByIdAndUpdate({_id}, {
            $set: {title: 'MongoDB'}
        }, {new: true,  useFindAndModify: true})
        console.log(updateData)
    } catch (error) {
        console.log(error)
    }
}
// updateDocument('642f2cdd26c4a7c3f8b6b8ae')
console.log('document update successfully')

// delete document
const deleteDocument = async (_id) => {
    try {
    const deleteData = await model.findByIdAndDelete({_id})        
    console.log(deleteData)
    } catch (error) {
        console.log(error)
    }
}

// deleteDocument('642f2cdd26c4a7c3f8b6b8ae')

// delete multiple document
const deleteManyDocuments = async () => {
    try {
        const deleteData = await model.deleteMany()
        console.log(deleteData)
    } catch (error) {
        console.log(error)
    }
}
deleteManyDocuments()
console.log("deleted document successfully")
