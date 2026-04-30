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

await add(2, 3);
await fetchData(1);

try {
    await failing();
} catch (e) {}