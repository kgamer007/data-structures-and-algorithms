'use strict';

const LinkedList = require('../lib/ll_kth_from_end');

describe('linkedList.js', () => {
  test('#kthEnd', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    expect(testList.kthFromEnd(1)).toEqual(7);  
  });
});
