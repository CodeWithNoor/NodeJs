// *********************** built-in modules *************************
// let fs = require("fs")
// let text = fs.readFileSync('delete.txt', 'UTF-8') // --> read file of directory 

// text= text.replace('browser', 'server side') 
// console.log(text)


// console.log('creating a new file...')
// fs.writeFileSync('create.txt', text) // --> create a new file in directory

// rename file
// fs.renameSync('delete.txt', 'create.txt')

// buffer data 
// const buf_data = fs.readFileSync('delete.txt') 
// console.log(buf_data) 
// <Buffer 57 72 69 74 69 6e 67 20 69 6e 20 62 72 6f 77 73 65 72 20 4a 53 20 61 6e 64 20 64 65 76 65 6c 6f 70 65 72 20 63 6f 6e 73 6f 6c 65>
// server running at http://127.0.0.1:3000/

// buffer covert original data into string
// const org_data = buf_data.toString()
// console.log(org_data)

// *********************** blocking & non-blocking modules *************************
// Danger of mixing blocking and non-blocking code
// synchronus --- line by line code execute it means blocking of code
// Asynchronus --- line by line code execution not guaranted it means non-blocking of code callback will fire

// let fs = require("fs")
// let text = fs.readFileSync('delete.txt', 'UTF-8', (a, b) => {
//       console.log(a, b)
//   })
//   text = text.replace ('browser', 'server side')
//   console.log(text)
//   console.log("This is the blocking of code")

//   Asynchronous ---> callbacks fire 
//   let fs = require("fs")
//   let text = fs.readFile("delete.txt", 'UTF-8', (a,b)=>{
//   console.log(a) // --> null
//   console.log(b)
// })
// 
// console.log("This is the non-blocking code")

// ************************** http request ***************************
// const http = require('http')
// const fs = require("fs")
// const fileContent = fs.readFileSync("index.html")

// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-type':'text/html'})
//     res.end(fileContent)
// })

// server.listen(80, '127.0.0.1', ()=>{
//     console.log("Listening on port 80")
// })


// ******************** Synchronous ***********************************
// 1. create a folder
// const fs = require('fs')
// fs.mkdirSync('something')

// 2. create a file 
// fs.writeFileSync('something/output.txt', "something else")

// 3. add more data into the file 
// fs.appendFileSync('something/output.txt', " nothing")

// 4. read the data without getting buffer at first + file encoding 
// const read = fs.readFileSync('something/output.txt', 'utf-8') 
// console.log(read) 

// 5. rename the file
// fs.renameSync('something/output.txt', 'something/myBio.txt')

// 6. now delete both the files and folder
// fs.unlinkSync('something/myBio.txt')
// fs.unlinkSync('something/output.txt')
//  fs.rmdirSync('something') 

// ******************** Asynchronous ***********************************
// const fs = require('fs')

// 1. create a folder asynchronously
// fs.mkdir('async', (err)=>{
//     console.log('create a folder asynchronously')
// })
    
// 2. create a file asynchronously 
// fs.writeFile('async/output.txt', "This is asynchronously", (err)=>{
//     console.log('create a file')
// })
        
// 3. add more data into the file 
// fs.appendFile('async/output.txt', " nothing", (err)=>{
//     console.log('add more data into the file')
// })
            
// 4. read the data without getting buffer at first + file encoding 
// const read = fs.readFileSync('async/output.txt', 'utf-8', (err, res)=>{
//     console.log('read the data') 
// }) 
// console.log(read)

// 5. rename the file
// fs.renameSync('async/output.txt', 'async/myBio.txt')

// 6. now delete both the files and folder
// fs.unlink('async/myBio.txt', (err)=>{
//    console.log('file deleted') 
// })
// fs.rmdir('async', (err)=>{
//     console.log('folder deleted')
// }) 
    
// ************************** streams *****************************
// streams are object that let you read data from a source or write data to a destination in continous fashion. In node.js four types of streams
// 1. Readable --> read operations
// 2. Writeable --> write opeartion
// 3. Duplex --> both read and write operation
// 4. Transform --> where the ouput is computed based on input

// ************************** create server *****************************
// 1. The http.createSever() method include request & response parameters which is supplied by node.js
// 2. The request object can be used for get information about the current http request ---> e.g --- url, request, header & data

const fs = require('fs')
const https = require('https')
    
const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('index.html')
const about = fs.readFileSync('./about.html')
const services = fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contact.html')

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.status = 200
    res.setHeader('Content-type', 'text/html')
    url = req.url

    if(url == '/'){
        res.end(home)
    }
    else if(url == '/about'){
        res.end(about)
    }
    else if(url == '/services'){
        res.end(services)
    }
    else if(url == '/contact'){
        res.end(contact)
    }
    else{
        res.writeHead(404)
        res.end("page doesn't exsist")
    }
})

server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}/`)
})
