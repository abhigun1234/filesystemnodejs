// const  p =new Promise((resolve,reject)=>{


//     //async operation 
    
//     setTimeout(()=>{

//         resolve("hello")
//     },3000)
    

// })
// p.then(result =>console.log("result",result)).catch(error=>{

//     consol.log(' erroe message')
// })

//step1 

const mypromise =new Promise((resolve,reject)=>{
//async operation
 
setTimeout(()=>{

//resolve('bye bye good luck')
  reject('error')  
})
},3000)

//
mypromise.then(result=>{
   console.log('data',result)

}).catch(error=>{

    console.log(error)
})
