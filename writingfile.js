var fs=require('fs')
var content='india'
fs.writeFileSync('createfile.txt',content,'utf-8')
// function writeFile(error)
// {
//  if(error)
//     {
//         console.log(error)
//     }
//     else
//         {
//             console.log('file writing completed')
//         }
     
// }