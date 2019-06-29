var fs=require("fs")
var content='hello how are you'
fs.writeFile("write.txt",content,'utf-8',writingFile)

function writingFile(error)
{

    if(error)
        {

            console .log(error)
        }
        else
            {
                console.log('file Writting completed')
            }

}
console.log('done')