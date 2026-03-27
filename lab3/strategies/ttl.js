export function createTTL(ttl) {
    return function(cache) {   
        const now = Date.now();
        for (const [key, value] of cache) {
            if (now - value.createdAt > ttl) {
                cache.delete(key);
            }
        }
    };
}