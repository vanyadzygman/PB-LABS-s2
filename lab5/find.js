export function findCallback(arr, predicate, callback) {
    let found = false;
    let i = 0;

    function next() {
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

export function findPromise(arr, predicate) {
    return new Promise((resolve, reject) => {
        const promises = arr.map(el => predicate(el));
        Promise.all(promises).then(results => {
            const index = results.findIndex(r => r);
            resolve(index !== -1 ? arr[index] : undefined);
        }).
        catch(reject);
    });
}