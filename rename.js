var fs =require('fs')
fs.rename('hello.txt','bye.txt',renameFile)
function renameFile(error)
{

    if(error)
        {
            console.log('error',error)
        }
        else
            {
                console.log('rename done')
            }

}