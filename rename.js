//write a get api to fetch the details from the logs.txt
//return into the json format
// express 
//fs module for achiving the task

// var app =require('express')
//app.get('/fetchdata')
var fs =require('fs')
fs.rename('story.txt','storymybook.txt',renameFile)
function renameFile(error1)
{

    if(error1)
        {
            console.log('error',error1)
        }
        else
            {
                console.log('rename done')
            }

}