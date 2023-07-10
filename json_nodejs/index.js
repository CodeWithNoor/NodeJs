const http = require('http')
const fs = require('fs')

const port = 80
const hostname = '127.0.0.1'

// const data = {
//     product: 'computer',
//     stock: '5',
//     price: "$5",
//     discount: "$0.1"
// }

// stringify ---> object convert into json format
// const obj = JSON.stringify(data)
// console.log(obj)

// parse --- > json convert to object
// const json = JSON.parse(obj)
// console.log(json)

// create a new file
// fs.writeFile("output.json", obj , (err) => {
//     console.log("create a json file")
// })

// read file
// fs.readFile('output.json', 'utf-8', (err, res) => {
//     console.log("read a json file", res)
//     const orgData = JSON.parse(obj)
//     console.log(orgData)
// })

// delete file
// fs.unlink('output.json', (err) => {
//     console.log('delete file')
// })


const server  = http.createServer((req, res) => {
    
    if(req.url == '/'){
        // ******** Asynchronously *********
        // fs.readFile('api.json', 'utf-8', (err, data) => {
            //     res.end(data)
            
            // ---> json file covert object
            // const json = JSON.parse(data)
            // console.log(json)
            // })
            
        //******** Synchronously ********
        const data = fs.readFileSync('api.json', 'utf-8')
        res.end(data)

        // ---> json file covert object
        const obj = JSON.parse(data)
        console.log(obj)
    }

    else{
        res.writeHead(404, {'Content-type': 'text/html'})
        res.end("<p>This API doesn't exsist</p>")
    }
}) 

server.listen(port, hostname, () => {
    console.log(`server start successfully ${hostname}:${port}`)
})