var fs=require("fs")
fs.readFile("myle.txt","utf8",reciveFileSystem)
function reciveFileSystem(error,data)
{
  
  console.log(data)
  console.log(error)
}
console.log("hi")