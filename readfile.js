// var fs=require("fs")
// fs.readFile("myle.txt","utf8",reciveFileSystem)
// function reciveFileSystem(error,data)
// {
  
//   console.log(data)
//   console.log(error)
// }
// console.log("hi")
//  var fs=require("fs")
//  fs.readFile("demo.txt","utf8",reciveFileSystem)

// function reciveFileSystem(error,data){
// console.log("error",error)
// console.log("data",data)

// }
// console.log("hello world")

// import fs module
  var fs=require('fs')
  fs.readFile('readmyfile1.txt','utf8',readMyFile)
  console.log("hello")
  function readMyFile(error,data){

        console.log("error",error)
  }
