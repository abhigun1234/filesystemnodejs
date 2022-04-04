var fs=require("fs")
fs.unlink("mystory.txt",fileUnlinkCompleted);
function fileUnlinkCompleted(error)
{
    if(error)
        {
            console.log(error)
        }
        else{
            console.log("file deleted")
        }

}