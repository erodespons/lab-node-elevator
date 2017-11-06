const Elevator = require('./elevator.js');
const Person = require('./person.js');

const elevator = new Elevator();

elevator.start();

let pepe = new Person ("Pepe", 0, 3);

elevator.call(pepe);
