import { findCallback, findPromise } from './find.js';

const numbers = [1, 3, 5, 8, 12, 7];

findCallback(numbers, (el, cb) => cb(null, el > 6), (err, result) => {
    console.log('callback result:', result);
});

findPromise(numbers, el => Promise.resolve(el > 6))
    .then(result => console.log('promise result:', result));

async function main() {
    const result = await findPromise(numbers, el => Promise.resolve(el > 6));
    console.log('async/await result:', result);
}

main();