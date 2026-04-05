export class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(item, priority) {
        this.items.push({ item, priority });
    }

    #find(mode) {
        if (mode === 'newest') return this.items[this.items.length - 1];
        if (mode === 'oldest') return this.items[0];
        const compare = {
            highest: (a, b) => a.priority > b.priority,
            lowest:  (a, b) => a.priority < b.priority,
        };
    return this.items.reduce((best, el) =>
        compare[mode](el, best) ? el : best);
    }
    peek(mode) {
        return this.items.length ? this.#find(mode).item : null;
    }
    dequeue(mode) {
        if (!this.items.length) return null;
        const el = this.#find(mode);
        this.items.splice(this.items.indexOf(el), 1);
        return el.item;
    }
}