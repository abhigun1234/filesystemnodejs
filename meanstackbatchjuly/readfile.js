var fs=require("fs")
fs.readFile("mdata.txt","utf-8",readFileText)



function readFileText(error,data){
    if(error){
        console.log("error",error)
    }
    else{
        console.log("data",data)
    }


}
// fs.readFile("../mystory.txt","utf-8",readingFile)
// console.log("hello world")
// function readingFile(error,data)
// {
//    if(error)
//     {
//         console.log("error",error)
//     }
//     else
//         {

//             console.log(data)
//         }

// }