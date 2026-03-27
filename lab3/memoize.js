export function memoize(fn, options = {}) {
  const maxSize = options.maxSize ?? Infinity;
  const evict = options.evict ?? null;
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    if (cache.size >= maxSize && evict) {
      evict(cache);
    }

    const result = fn(...args);
        cache.set(key, result);
    return result;
  };
}