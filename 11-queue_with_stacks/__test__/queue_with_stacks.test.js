'use strict';

import Queue from '../queue_with_stacks';

describe('2 stacks which take in enqueue and dequeue methods', () => {
  test('enqueue method', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.stack1).toEqual([1, 2, 3]);
  });
  test('dequeue method', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.stack2).toEqual([2, 3]);
  });
});