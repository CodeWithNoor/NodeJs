const mongoose = require("mongoose")

// creating a connection & create in a new db
// It return promise
mongoose.connect("mongodb://localhost:27017/testing", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4
})

.then(() => console.log("Connect successfully"))
.catch((err) => console.log(err))


// Schema --- Structure of document
// const mongooseSchema = new mongoose.Schema({
// ---> String is a shorthand ({type: String})
//     title: String,
//     author: String,
//     course: String,
//     hidden: Boolean,
// })

// ---> 2ND WAY
const mongooseSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    course_type: {
        type: String,
    },
    tut: {
        type: Number,
    },
    hidden: {
        type: Boolean,
        required: true
    }
})

// Mongoose model is a wrapper of Mongoose schema.
// Mongoose schema define the structure of the document, default values, validators etc, whereas a mongoose model.
// provide an interface to the databse for creating, query, updating, deleting, records, etc.

// CRUD OPERATIONS
// create collection
// insertMany provide model
const Data = new mongoose.model('Data', mongooseSchema)

// CREATE OR INSERT DOCUMENT
// docs.save() ---> save return promise so better than use asyn await

const createdata = async () => {
    // error handling
    try{
        const JavaScript = new Data({
            title: 'JavaScript',
            author: "Anonymous",
            course_type: 'Frontend',
            tut: 60,
            hidden:true,
        })
        const Node_js = new Data({
            title: 'Node Js',
            author: "Anonymous", 
            course_type: 'Backend',
            tut: 40,
            hidden: true,
        })
        const Express_js = new Data({
            title: 'Express Js',
            author: "Anonymous",
            course_type: 'Backend',
            tut: 36,
            hidden: true,
        })
        const MongoDB_js = new Data({
            title: 'MongoDB Js',
            author: "Anonymous",
            course_type: 'Backend',
            tut: 40,
            hidden: true,
        })
        const React_js = new Data({
            title: 'React Js',
            author: "Anonymous",
            course_type: 'Frontend',
            tut: 30,
            hidden: true,
        })
        const Next_Js = new Data({
            title: 'Next Js',
            author: "Anonymous",
            course_type: 'Backend',
            tut: 45,
            hidden: true,
        })

        const result = await Data.insertMany([JavaScript, Node_js, Express_js, React_js, MongoDB_js, Next_Js])
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
// createdata() 

// READ DOCUMENT
// const readData = async () => {
    // try {
    // sorting documents --->  sort({name: 1}) --- ascending order 1 & descending order -1
    // countDocuments() ---> it means how many collections in your document
    // const res = await Data.find({title: 'Next Js'}).limit(1).select({title: 1, author: 1})
    //     console.log(res)
    // } catch (error) {
    // console.log(error)        
    // }
// }

// COMPARISION OPERATOR
// const readData = async () => {
//     try {
//     const res = await Data.find({course_type: {$in: ['Frontend', 'Backend']}, tut: {$lt: 30}})
//     console.log(res)
//     } catch (error) {
//     console.log(error)        
//     }
// }

// LOGICAL OPERATOR
// const readData = async () => {
//     try {
//         const result = await Data.find({$and : [{course_type: 'Frontend'}, {title: 'React Js'}]}).select({title: 1, course_type: 1})
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// readData()

// UPDATE DOCUMENT
// const updateData = async (_id) => {
//     try {
//         const result = await Data.findByIdAndUpdate({_id}, {
//             $set: {title: 'Next Js'}
//         }, {new: true, useFindAndModify: true })
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }
// updateData("642db193dad5156ce2510b52")
 
// DELETE DOCUMENT
// Delete One Document --- 1ST WAY
// const deleteOneData = async (_id) => {
//     try {
//         const result = await Data.deleteOne({_id})
//         console.log("deleted successfully", result)
//     } catch (error) {
//         console.log(error)
//     }
// }
// deleteOneData("642e1a59d7f5cf31653c805d")

// 2ND WAY 
const deleteData = async (_id) => {
    try {
        const result = await Data.findByIdAndDelete((_id))
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
deleteData('642ef2eabba43b11678a4907')

// Delete Multiple Document
// const deleteManyData = async () => {
//     try {
//         const result = await Data.deleteMany()
//         console.log("deleted successfully", result)
//     } catch (error) {
//         console.log(error)
//     }
// }
// deleteManyData()