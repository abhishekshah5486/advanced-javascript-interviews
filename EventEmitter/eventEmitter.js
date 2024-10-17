const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('greet', (name) => 
{
    console.log(`Hi, ${name}`);
})
eventEmitter.on('greet', (name) => 
{
    console.log(`How are you doing ${name} ?`);
})

eventEmitter.emit('greet', 'Abhishek');