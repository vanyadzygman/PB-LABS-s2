export function lfu(cache) {
    let minFreq = Infinity;
    let minKey = null;

    for (const [key, value] of cache) {
    if (value.freq < minFreq) {
        minFreq = value.freq;
        minKey = key;
    }
}

cache.delete(minKey);
}