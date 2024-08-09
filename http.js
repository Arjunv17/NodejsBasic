const http = require('http')

// function serverFun(a, b) {
//     return a+b
// }

// const serverFun2 = (a, b)=> a+b;

// console.log(serverFun(2,2), ">>>>>>", serverFun2(2,2))


http.createServer((req, res) => {
    res.write("This is a new Server!!")
    res.end();
}).listen('3500')

