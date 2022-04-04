var http=require('http')

// var callback=function(req,res)
// {

//     console.log("connected to server on 3000 port")
//  res.end("Hello Everone welcome to node js tutorial")
// }
//https://github.com/abhigun1234/filesystemnodejs/blob/master/promisesequence.js
http.createServer(function(req,res)
{

    console.log("connected to server on 3500 port")
    jsonObj={"name":"abhishek"}
 res.end("hi everone enjoy the day ")

}).listen(4000)
// http.get('/hello',function(req,res)
// {res.end("hello")
// }
// )