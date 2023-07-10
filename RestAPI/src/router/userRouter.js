const express = require("express")
const model = require("../model/user")
const router = express.Router()

// create document
router.post('/user', async(req, res) => {
    const user = new model(req.body)
    try {
        const postMethod = await user.save()
        res.status(200).send(postMethod)
    } catch (error) {
        res.status(400).send("This is the error from the post method")
    }
})

// read collection
// router.get('/user', async(req, res)=> {
//     try {
//     const getMethod = await model.find()        
//     res.status(200).send(getMethod)
//     } catch (error) {
//         res.status(400).send("This is the error from the get method")
//     }
// })

router.get('/user/:id', async(req, res) => {
    try {
        const getMethod = await model.findById(req.params.id)
        res.status(200).send(getMethod)
    } catch (error) {
        res.status(400).send("Invalid ID")
    }
})

// update collection
router.patch('/user/:id', async (req, res) => {
    try {
        const updateMethod = await model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true, useFindAndModify: true })
        if (!updateMethod) {
            return res.status(404).send("Invalid ID from the patch method")
        }res.status(200).send(updateMethod)
    } catch (error) {
        res.status(400).send("Invalid ID")
    }
})


// delete collection
router.delete('/user', async (req, res) => {
    try {
        const deleteMethod = await model.deleteMany()
        res.status(200).send(deleteMethod)
    } catch (error) {
        res.status(400).send("This is the error from the delete method")
    }
})

// delete collection only one user
router.delete('/user/:id', async(req, res) => {
    try {
        const deleteUserData = await model.findByIdAndDelete(req.params.id)
        if(!deleteUserData) {
            return res.status(404).send("Invalid ID from the delete method")
        } res.status(200).send(deleteUserData)
    } catch (error) {
        res.status(404).send("Invalid ID")
    }
})

module.exports = router