var fs=require("fs")
var content='I know you are there'
fs.writeFile("showcontent.txt",content,'utf-8',writingFile)

function writingFile(error1)
{

    if(error1)
        {

            console .log(error1)
        }
        else
            {
                console.log('file Writting completed')
            }

}
// console.log('done')