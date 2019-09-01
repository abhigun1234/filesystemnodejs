const p1=new Promise((resolve,reject)=>{


    setTimeout(()=>{

        console.log('Async operation one running')
        resolve('hello')
        //reject('error')
    },2000)
})
const p2=new Promise((resolve,reject)=>{


    setTimeout(()=>{

        console.log('Async operation two running')
        resolve('bye')
    },5000)
})

const p3 =new Promise((resolve,reject)=>{

    setTimeout(()=>{

        console.log('Async operation two running')
        resolve('implemented consequtive callback')
    },3000)
})

const p4=new Promise((resolve,reject)=>{

    setTimeout(()=>{

        console.log('Async operation two running')
        resolve('implementing promise ending here')
    },000)
})
const p5=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        
                console.log('Async operation two running')
                resolve('welcome to the learning session of promise')
            },2000)


})
//consumer 
Promise.all([p1,p2,p3,p4,p5]).then(result=>{

    console.log('result',result)
})