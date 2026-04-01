export class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(item, priority) {
        this.items.push({ item, priority, order: this.items.length });
    }

    #find(mode) {
        const compare = {
            highest: (a, b) => a.priority > b.priority,
            lowest:  (a, b) => a.priority < b.priority,
            newest:  (a, b) => a.order > b.order,
            oldest:  (a, b) => a.order < b.order,
        };
        return this.items.reduce((best, el) =>
            compare[mode](el, best) ? el : best);
    }
}