const express = require("express")
const model = require("../model/user")
const router = express.Router()

router.post("/user", async(req, res) => {
    const user = new model(req.body)
    try {
        const postMethod = await user.save()
        res.status(200).send(postMethod)
    } catch (error) {
        res.status(400).send("This is the error from the post method")
    }
})

router.get('/user', async(req, res)=>{
    try{
        const readDocument = await model.find().sort({ranking: 1})
        res.status(200).send(readDocument)
    }catch(error){
        res.status(400).send("Don't get the data")
    }
})

router.patch('/user/:id', async(req, res) => {
    try {
        const updateDocs = await model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true, useFindAndModify: true })

    if(!updateDocs){
        return res.status(404).send("Invalid ID from the patch method")
    }res.status(200).send(updateDocs)
    } catch (error) {
        res.status(400).send("Don't update the data")
    }
})

router.delete('/user/:id', async(req, res) => {
    try {
        const deleteDocs = await model.findByIdAndDelete(req.params.id)
        if(!deleteDocs){
            return res.status(404).send("Invalid ID from the delete method")
        }res.status(200).send(deleteDocs)
    } catch (error) {
        res.status(400).send("Don't delete the data")
    }
})

module.exports = router