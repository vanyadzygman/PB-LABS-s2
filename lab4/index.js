import { PriorityQueue } from './priorityQueue.js';

const pq = new PriorityQueue();

pq.enqueue('низький', 1);
pq.enqueue('високий', 10);
pq.enqueue('середній', 5);

console.log('highest peek:', pq.peek('highest'));
console.log('lowest peek:', pq.peek('lowest'));
console.log('newest peek:', pq.peek('newest'));
console.log('oldest peek:', pq.peek('oldest'));

console.log('dequeue highest:', pq.dequeue('highest'));
console.log('dequeue oldest:', pq.dequeue('oldest')); 
console.log('dequeue newest:', pq.dequeue('newest'));  