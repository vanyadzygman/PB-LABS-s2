export class AuthProxy {
    constructor(authStrategy) {
        this.authStrategy = authStrategy;
        this.logs = [];
    }

    setAuth(authStrategy) {
        this.authStrategy = authStrategy;
    }

    async request(url, options = {}) {
        const headers = this.authStrategy({ ...options.headers });

        const logEntry = { url, headers, timestamp: new Date().toISOString() }
        this.logs.push(logEntry);
        console.log(`[${logEntry.timestamp}] requesting: ${url}`);

        const response = await fetch(url, { ...options, headers });
        return response.json();
    }
}