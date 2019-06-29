const eventEmitter =require('events')
const event=new eventEmitter()

var callback=function()
{
    console.log("raised a request")
}
//register the event 
event.on('raiseevent',callback)

//emit 
event.emit('raiseevent')