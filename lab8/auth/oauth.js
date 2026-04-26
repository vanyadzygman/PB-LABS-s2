export function oauthAuth(accessToken) {
    return (headers) => {
        headers['Authorization'] = `OAuth ${accessToken}`;
        return headers;
    };
}