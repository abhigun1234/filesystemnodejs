var http=require('http')

var callback=function(req,res)
{

    console.log("connected to server on 3000 port")
 res.end("Hello Everone welcome to node js tutorial")
}
http.createServer(function(req,res)
{

    console.log("connected to server on 2500 port")
 res.end("Welcome to September")
}).listen(3500)
http.get('/hello',function(req,res)
{res.end("hello")
}
)