var fs=require("fs")
var content='Hello welcome to node js fs module writting file sync'
fs.writeFileSync("write.txt",content,'utf-8')

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
// console.log('done')