const FSM = require('./fsm2.js');
const config = require('./test/linearconfig.json');


const fsm = new FSM(config.fsm);

console.log('currentState', fsm.getState());

fsm.process('ungdom');
console.log('currentState', fsm.getState());

fsm.process('M');
console.log('currentState', fsm.getState());

fsm.process('data');
console.log('currentState', fsm.getState());

fsm.process('Hedmark');
console.log('currentState', fsm.getState());

fsm.process('Grue');
console.log('currentState', fsm.getState());

fsm.process('J');
console.log('currentState', fsm.getState());

fsm.process('permanent');
console.log('currentState', fsm.getState());

fsm.process('N');
console.log('currentState', fsm.getState());

fsm.process('N');
console.log('currentState', fsm.getState());