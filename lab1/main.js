import { colorGenerator } from './generators.js';
import { consumeWithTimeout } from './iterator.js';

const colors = colorGenerator();

consumeWithTimeout(colors, 1);