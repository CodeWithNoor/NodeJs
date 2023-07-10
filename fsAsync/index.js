// we pass them a function as an argument - a callback -
// that gets called when that task completes
// The callback has an argument that tells you whether
// The operations completeed successfully
// Now we need to stay what to do fs.writeFile 
// has completed (aven if it's nothing), & start 
// checking for errors

// ***************************************************************
// const fs = require('fs')

// fs.writeFile('bio.txt', "today is wonderfull", (err)=>{
//     console.log(err)
// })

// fs.readFile('bio.txt', (err, res)=>{
//     console.log(`res: ${res}`)
// })

// fs.rename('bio.txt', 'mybio.txt', ()=>{
//     console.log('rename file')
// })

// fs.unlink('myBio.txt', ()=>{
//     console.log('delete this file')
// })

// Asynchronous vs Synchronous

// Synchronous
// fs.readFileSync('bio.txt', 'utf-8')
// console.log('after the data')

// Asynchronous
// fs.readFile('bio.txt', 'utf-8', (err)=>{
//     console.log(err)
// })
// console.log('after the data')




