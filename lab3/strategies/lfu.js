export function lru(cache) {
    const firstKey = cache.keys().next().value;
    cache.delete(firstKey);
}