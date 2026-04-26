export function apiKeyAuth(apiKey) {
    return (headers) => {
        headers['x-api-key'] = apiKey;
        return headers;
    }
}