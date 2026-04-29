const LEVELS = { DEBUG: 0, INFO: 1, ERROR: 2 };

export function log({ level = 'INFO', formatter = null } = {}) {
    return function(fn) {
        return async function(...args) {
            const timestamp = new Date().toISOString();
            const start = Date.now();

            try {
                const result = await fn(...args);
                const duration = Date.now() - start;

                const entry = { level, timestamp, args, result, duration };
                const output = formatter ? formatter(entry) : entry;

                if (LEVELS[level] >= LEVELS['INFO']) {
                    console.log(output);
                }

                return result;
            }   catch (err) {
                const entry = { level: 'ERROR', timestamp, args, error: err.message };
                const output = formatter ? formatter(entry) : entry;
                console.error(output);
                throw err;
            }
        };
    };
}