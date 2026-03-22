import { colorGenerator, consumeWithTimeout } from 'lab1';

const colors = colorGenerator();

consumeWithTimeout(colors, 1);