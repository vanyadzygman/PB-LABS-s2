import { colorGenerator, consumeWithTimeout } from '../lab1/index.js';

const colors = colorGenerator();

consumeWithTimeout(colors, 1);