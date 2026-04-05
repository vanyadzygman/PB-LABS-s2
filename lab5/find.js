export function findCallback(arr, predicate, callback) {
    for (let i = 0; i < arr.length; i++) {
        predicate(arr[i], (err, result) => {
            if (err) return callback(err, null);
            if (result) return callback(null, arr[i]);
        });
  }
  callback(null, undefined);
}