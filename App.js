var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
}

util.inherits(Person,events.EventEmitter);

var Shu = new Person('Shu');
var Vo = new Person('Vo');
var Moy = new Person('Moy');
var People = [Shu,Vo,Moy];

People.forEach(function(person){
   person.on('speak',function(mssg){
    console.log(person.name + ' said: ' + mssg);
   });
});

Shu.emit('speak', 'hi');
Vo.emit('speak', 'Hello');
Moy.emit('speak', 'Go Corona');