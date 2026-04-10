import { Readable } from 'node:stream';
export function createLargeDataStream(size) {
    let i = 0;
    return new Readable({
        objectMode: true,
        read() {
            if (i >= size) {
                this.push(null);
                return;
            }
            this.push({ id: i, value: Math.random() });
            i++;
        }
    });
}