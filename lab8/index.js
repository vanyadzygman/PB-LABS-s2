import { AuthProxy } from './proxy.js';
import { apiKeyAuth } from './auth/apiKey.js';
import { jwtAuth } from './auth/jwt.js';
import { oauthAuth } from './auth/oauth.js';

const proxy = new AuthProxy(apiKeyAuth('my-api-key'));

const result1 = await proxy.request('https://wttr.in/Kyiv?format=j1');
console.log('Kyiv temp:', result1.current_condition[0].temp_C + '°C');

proxy.setAuth(jwtAuth('my-jwt-token'));
const result2 = await proxy.request('https://wttr.in/London?format=j1');
console.log('London temp:', result2.current_condition[0].temp_C + '°C');

proxy.setAuth(oauthAuth('my-oauth-token'));
const result3 = await proxy.request('https://wttr.in/NewYork?format=j1');
console.log('NewYork temp:', result3.current_condition[0].temp_C + '°C');

console.log('total requests:', proxy.logs.length);