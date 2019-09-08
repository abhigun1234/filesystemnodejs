var fs=require("fs")
fs.readFile("../mystory.txt","utf-8",readingFile)
console.log("hello world")
function readingFile(error,data)
{
   if(error)
    {
        console.log("error",error)
    }
    else
        {

            console.log(data)
        }

}