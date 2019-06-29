var fs=require("fs")
fs.readFile("hello.txt",'utf-8',readingFile)

function readingFile(error,data)
{
    console.log(error)
    console.log(data)

}
console.log("done")
