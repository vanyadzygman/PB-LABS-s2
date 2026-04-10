import { createLargeDataStream } from './stream.js';

const stream = createLargeDataStream(1000000);
let count = 0;
let sum = 0;

stream.on('data', (chunk) => {
    count++;
    sum += chunk.value;
});

stream.on('end', () => {
    console.log(`processed: ${count} items`);
    console.log(`average value: ${(sum / count).toFixed(4)}`);
});
