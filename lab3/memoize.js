export function memoize(fn, options = {}) {
  const maxSize = options.maxSize ?? Infinity;
  const evict = options.evict ?? null;
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      const entry = cache.get(key);
      entry.freq++;
      return entry.value;
    }
    if (cache.size >= maxSize && evict) {
      evict(cache);
    }
    const result = fn(...args);
    cache.set(key, { value: result, freq: 1, createdAt: Date.now() });
    return result;
  };
}     