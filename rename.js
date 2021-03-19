//write a get api to fetch the details from the logs.txt
//return into the json format
// express 
//fs module for achiving the task

// var app =require('express')
//app.get('/fetchdata')
var fs =require('fs')
fs.rename('one.txt','oneone.txt',renameFile)
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