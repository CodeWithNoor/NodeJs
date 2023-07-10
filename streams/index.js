// ************************** streams *****************************
// streams are object that let you read data from a source or write data to a destination in continous fashion. In node.js four types of streams
// 1. Readable --> read operations
// 2. Writeable --> write opeartion
// 3. Duplex --> both read and write operation
// 4. Transform --> where the ouput is computed based on input

const http = require('http')
const fs = require ("fs") 
const port = 3000
const hostname = '127.0.0.1'

const server = http.createServer((req, res)=>{
    // fs.writeFileSync('output.txt', "streams are object that let you read data from a source or write data to a destination in continous fashion")

    // const data  = fs.readFileSync('output.txt', 'utf-8')
    // res.end(data)

    // streams ---> 1st way
    // const rstream = fs.createReadStream("output.txt")
    // rstream.on("data", (chunkdata) => {
    //     rstream.write(chunkdata)
    // })
    // rstream.on('end', ()=>{
    //     res.end()
    // })
    // rstream.on("error", () => {
    //     res.end("this page doesn't exist")
    // })

    // streams ---> 2nd way 
    const rstream = fs.createReadStream("output.txt")
    rstream.pipe(res)
})

server.listen(port, hostname, () => {
    console.log(`The server start successfully ${hostname}:${port}`)
})
