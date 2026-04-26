export function jwtAuth(token) {
    return (headers) => {
        headers['Authorization'] = `Bearer ${token}`;
        return headers;
    };
}