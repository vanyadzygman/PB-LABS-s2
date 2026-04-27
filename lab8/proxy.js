export class AuthProxy {
    constructor(authStrategy) {
        this.authStrategy = authStrategy;
    }

    setAuth(authStrategy) {
        this.authStrategy = authStrategy;
    }

    async request(url, options = {}) {
        const headers = this.authStrategy({ ...options.headers });
        const response = await fetch(url, { ...options, headers });
        return response.json();
    }
}