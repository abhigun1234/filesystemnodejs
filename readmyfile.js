var fs=require('fs')
var content=' welcome'
var data=fs.readFile('welcome.txt','utf-8',readFile)
// function readFile(error,data)
// {
  
//     console.log(error)
//     console.log(data)

// }
function readFile(error,data)
{
  if(error)
    {
        console.log(error)
    }
    else
        {
            //console.log('file created')
            fs.writeFile('abc.txt',data,writeFile)
        }

}
// console.log(data)
// console.log('done')
function writeFile(error)
{

 if(error)
    {

        console.log(error)
    }
    else
        {

            console.log('file written in abc.txt')
        }


}