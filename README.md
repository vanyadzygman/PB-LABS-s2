# PB-LABS-s2
Repository for second semester lab work.

## Labs
### Lab №1: Generators and Iterators
The project demonstrates working with infinite data streams.

#### Functionality:
- **Generator**: creates an infinite sequence of colors;
- **Iterator**: processes values ​​for a given time.

### Lab №2: Library and Modules
This task transforms the code into a reusable library.

#### Key Achievements:
- **Library Entry Point:** Created `index.js` to manage all public exports.
- **Demonstration Project:** Created a separate folder (`lab2`) to show how to use the library via local imports.
- **Configuration:** Initialized `package.json`, MIT license, and author details.

### Lab №3: Memoization Function
This project implements a memoization function with configurable cache eviction strategies.

#### Functionality:
- **Memoize**: wraps any pure function and caches its results;
- **LRU**: removes the least recently used cache entry when the cache is full;
- **LFU**: removes the least frequently used cache entry when the cache is full;
- **TTL**: expires cache entries after a configurable time limit;
- **Custom Policy**: allows users to pass their own eviction function.

### Lab №4: Bi-Directional Priority Queue
Implements a priority queue with configurable retrieval by priority or insertion order.

#### Operations:
- **enqueue(item, priority)**: insert an element;
- **peek/dequeue(highest, lowest, oldest, newest)**: retrieve or remove an element.

### Lab №5: Async Array Functions
Implements asynchronous versions of the standard `find` array function.

#### Functionality:
- **findCallback**: callback-based asynchronous version;
- **findPromise**: promise-based version with async/await support.

### Lab №6: Large Data Processing with Streams
Implements memory-efficient processing of large datasets using Node.js Readable streams.

#### Details:
- **createLargeDataStream**: generates a large data stream without loading it into memory;
- processes 1 000 000 items incrementally and calculates the average value.

### Lab №7: Reactive Communication with EventEmitter
Implements reactive message-based communication between entities using a custom EventEmitter.

#### Features:
- **on(event, listener)**: subscribe to an event;
- **off(event, listener)**: unsubscribe from an event;
- **emit(event, data)**: emit an event to all listeners.

## Program installation:
```bash
git clone https://github.com/vanyadzygman/PB-LABS-s2.git
cd PB-LABS-s2
```
Make sure you have Node.js installed
```bash
node -v
```
Launch
```bash
node lab1/main.js
node lab2/main.js
node lab3-example/example.js
node lab4/index.js
node lab5/index.js
node lab6/index.js
node lab7/index.js
```

## Author
- **Name:** Ivan Dzyhman
- **Group:** IM-51
- **Mail:** vanyadzygman@gmail.com
