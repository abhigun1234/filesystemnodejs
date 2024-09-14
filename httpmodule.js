var http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){

        res.write("welocme all")
        res.end()
    }
})
server.listen("2456")
console.log("server is running in the port 2456")

// const server=http.createServer((req,res)=>{
//     console.log("req",req.url)
//     if(req.url==='/'){
//         res.write('Hello World')
//         res.end()
//     }
//     if(req.url==='/hello'){
//         res.write("hello")
//         res.end()
//     }
// })
// http.get(()=>{
    
// })
// server.listen(3000)
// console.log("listining in the port 3000----")

// express http