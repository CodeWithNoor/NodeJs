// ************************ function wrapper *******************************
// Basically, your code in a (Node)file is wrapped inside this particular function. When someone requires this file, IIFE runs automatically and provides you objects such as module.exports, exports, __dirname, __filename.
// These objects are not global but local to your module (file). And these are made available by this IIFE function. Using this object can export your module.
// This is the private function

// It's just an e xample
// (function (exports, module, require, __filename, __dirname){
//     const div = (a , b) => {
//         console.log(5/5)
//     }
//     module.exports.div =  div 
// })()

// ***********************
console.log("This is module")

function avg(arr){
    let sum = 0;
    arr.forEach(element => {
        sum =+ element
    });    
    return sum/arr.length
}    

const sum = (a, b) => {
    console.log( a + b)
}    

const sub = (a, b) => {
    console.log( a - b)
}    

// module.exports itself oject ---> both method are used
module.exports = {
    avg, sum , sub, 
    repo: 'Github',
}    

// module.exports.repo = "Github"

