export function findCallback(arr, predicate, callback) {
    for (let i = 0; i < arr.length; i++) {
        predicate(arr[i], (err, result) => {
            if (err) return callback(err, null);
            if (result) return callback(null, arr[i]);
        });
  }
  callback(null, undefined);
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