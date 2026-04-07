export function findCallback(arr, predicate, callback, signal) {
    let found = false;
    let i = 0;

    function next() {
        if (signal?.aborted) return callback(new Error('aborted'), null);
        if (i >= arr.length) {
            if (!found) callback(null, undefined);
            return;    
        }
        const current = arr[i++];
        predicate(current, (err, result) => {
            if (err) return callback(err, null);
            if (result && !found) {
                found = true;
                return callback(null, current);
            }
            next();
        });
    }
    next();
}

export function findPromise(arr, predicate, signal) {
    return new Promise((resolve, reject) => {
        signal?.addEventListener('abort', () => reject(new Error('aborted')));
        const promises = arr.map(el => predicate(el));
        Promise.all(promises).then(results => {
            const index = results.findIndex(r => r);
            resolve(index !== -1 ? arr[index] : undefined);
        }).
        catch(reject);
    });
}