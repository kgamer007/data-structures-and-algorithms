'use strict';

class Queue {
  constructor() {
    this.stackA = [];
    this.stackB = [];
  }

  enqueue(value) {
    this.stackA.push(value);
    return this;
  }

  dequeue() {
    if (this.stackB.head) return this.stackB.head.pop();

    while (this.stackA.head) {
      this.stackB.push(this.stackA.pop());
    }
    return this.stackB.pop();
  }
}

export default Queue;
