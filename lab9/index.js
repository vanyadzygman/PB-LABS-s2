import { log } from './logger.js';

const add = log({ level: 'INFO' })(function add(a, b) {
    return a + b;
});

const fetchData = log({ level: 'INFO' })(async function fetchData(id) {
    return { id, data: 'some data' };
});

const failing = log({ level: 'ERROR' })(function failing() {
    throw new Error('something went wrong');
});

const multiply = log({
    level: 'INFO',
    formatter: (entry) => JSON.stringify(entry)
})(function multiply(a, b) {
    return a * b;
});

await add(2, 3);
await fetchData(1);
await multiply(4, 5);

try {
    await failing();
} catch (e) {}