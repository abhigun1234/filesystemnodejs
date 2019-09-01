var fs=require("fs")
fs.readFile("myfile.txt","utf8",reciveFileSystem,)
function reciveFileSystem(error,data)
{
  
  console.log(data)
  console.log(error)
}