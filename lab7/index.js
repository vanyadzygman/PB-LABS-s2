import { EventEmitter } from './eventEmitter.js';

const chat = new EventEmitter();

const a = (msg) => console.log(`a received: ${msg}`);
const b = (msg) => console.log(`b received: ${msg}`);
const c = (msg) => console.log(`c received: ${msg}`);

chat.on('message', a);
chat.on('message', b);
chat.on('message', c);

chat.emit('message', 'Hey everyone!');

chat.off('message', b);

chat.emit('message', 'b left the chat...');