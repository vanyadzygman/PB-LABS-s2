export function consumeWithTimeout(iterator, seconds) {
    const startTime = Date.now();
    const duration = seconds * 1000;

    while (Date.now() - startTime < duration) {
        const result = iterator.next()
        console.log("Color:", result.value);
    }

    console.log("End");
}