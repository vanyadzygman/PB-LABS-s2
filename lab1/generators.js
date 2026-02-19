export function* colorGenerator() {
    const colors = ["red", "green", "blue", "yellow"];
    let index = 0;

    while (true) {
        yield colors[index % colors.length];
        index++;
    }
}