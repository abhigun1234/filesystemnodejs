var fs=require("fs")
// fs.readFile("hello.txt",'utf-8',readingFiles)

// function readingFiles(error,data)
// {
//     console.log(error)
//     console.log(data)

// }
// console.log("done")
fs.readFile("book1.txt",'utf-8',readFileTxt)
console.log("hello")

function readFileTxt(error,data){
   console.log(error) 
   console.log(data)
}