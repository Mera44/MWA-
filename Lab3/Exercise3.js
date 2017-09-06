
const EventEmmiter = require('events');

class Clock extends EventEmmiter{
    constructor(){
        super();
       // var data = "Wohoo";
    }
    visit(data){
       // console.log(this.message);
        setInterval(()=>this.emit('tick',data),1000);
    }

}
var Tick = new Clock();
 Tick.on('tick',function(data){
     console.log(data);
 });
 Tick.visit('Wohoo');