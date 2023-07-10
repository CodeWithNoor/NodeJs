// MODULES

// ************* OS MODULE ******************
// const os = require('os')

// ORCH ---> Returns the operating system CPU architecture for which the Node.js binary was compiled
// console.log(os.arch())

// CPUS ---> Returns an array of objects containing information about each logical CPU core.
// console.log(os.cpus())

// ENDIANNESS ---> Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled. ---> bigEndian or littleEndian
// console.log(os.endianness())

// FREEMEM ---> Returns the amount of free system memory in bytes as an integer.
// const free_memory = os.freemem()
// console.log(`${free_memory/1024/1024/1024}`) // convert into giga_bytes

// const total_memory = os.totalmem()
// console.log(`${total_memory/1024/1024/1024}`)

// GET_PRIORITY ---> Returns the scheduling priority for the process specified by pid. If pid is not provided or is 0, the priority of the current process is returned.
// console.log(os.getPriority())

// HOMEDIR ---> Returns the string path of the current user's home directory.
// console.log(os.homedir())

// HOSTNAME ---> Returns the host name of the operating system as a string.
// console.log(os.hostname())

// LOADAVG ---> The load average is a measure of system activity calculated by the operating system and expressed as a fractional number & load average is a Unix-specific concept. On Windows, the return value is always [0, 0, 0].
// console.log(os.loadavg())

// MACHINE ---> Retruen the machine type as a string
// console.log(os.machine())

// NETWORK_INTERFACES ---> Returns an object containing network interfaces that have been assigned a network address.
// console.log(os.networkInterfaces())

// PLATFORM ---> Returns a string identifying the operating system platform for which the Node.js binary was compiled.
// console.log(os.platform())

// USERINFO 
// console.log(os.userInfo())

// ************* PATH MODULE ******************
const path = require('path')

const basename = path.basename('D:/YAWAR/NodeJs/os_module/index.js')
console.log(basename)

const dirname = path.dirname('D:/YAWAR/NodeJs/os_module/index.js')
console.log(dirname)

const extname = path.extname('D:/YAWAR/NodeJs/os_module/index.js')
console.log(extname)

const parse = path.parse('D:/YAWAR/NodeJs/os_module/index.js')
console.log(parse)

console.log(parse.root)
console.log(parse.dir)