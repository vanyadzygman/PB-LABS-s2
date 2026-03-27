import { memoize, lru, lfu, createTTL } from 'lab3';
function add(a, b) {
    return a + b;
}
console.log('базова');
const memoAdd = memoize(add);
console.log(memoAdd(2, 3));
console.log(memoAdd(2, 3)); 

console.log('LRU');
const memoLRU = memoize(add, { maxSize: 2, evict: lru });
console.log(memoLRU(1, 2));
console.log(memoLRU(3, 4));
console.log(memoLRU(5, 6));
console.log(memoLRU(1, 2));

console.log('LFU');
const memoLFU = memoize(add, { maxSize: 2, evict: lfu });
console.log(memoLFU(1, 2));
console.log(memoLFU(3, 4));
console.log(memoLFU(1, 2));
console.log(memoLFU(5, 6));

console.log('TTL');
const memoTTL = memoize(add, { ttl: 100 });
console.log(memoTTL(1, 2));
setTimeout(() => {
    console.log(memoTTL(1, 2));
}, 50);
setTimeout(() => {
    console.log(memoTTL(1, 2));
}, 200);