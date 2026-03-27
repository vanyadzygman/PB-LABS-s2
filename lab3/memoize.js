export function memoize(fn, options = {}) {
  const maxSize = options.maxSize ?? Infinity;
  const evict = options.evict ?? null;
  const ttl = options.ttl ?? null;
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      const entry = cache.get(key);

      if (ttl && Date.now() - entry.createdAt > ttl) {
        cache.delete(key);
      } else {
        entry.freq++;
        return entry.value;
      }
    }

    if (cache.size >= maxSize && evict) {
      evict(cache);
    }

    const result = fn(...args);
    cache.set(key, { value: result, freq: 1, createdAt: Date.now() });
    return result;
  };
}