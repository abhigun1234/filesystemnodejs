var fs=require("fs")
fs.stat("story.txt",readingStatsCompleted);
function readingStatsCompleted(error,data)
{
    if(error)
        {
            console.log(error)
        }
        else{
            console.log("stats",data)
        }

}