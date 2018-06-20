'use strict';

const LinkedList = require('../lib/solution');

describe('solution.js', () => {
  test('#APPEND: return a node at the end of list', () => {
    const testList = new LinkedList();
    testList.append(5);
    expect(testList.head.value).toEqual(5);

    testList.append(6);
    expect(testList.head.next.value).toEqual(6);

    testList.append(7);
    expect(testList.head.next.next.value).toEqual(7);

    testList.append(1);
    expect(testList.head.next.next.next.value).toEqual(1);
  });

  test('#INSERTBEFORE: find value input and place newValue before in the node list', () => {
    const testList = new LinkedList();
    testList.append(1);
    testList.append(2);
    testList.append(3);
    testList.insertBefore(3, 1);
    expect(testList.head.next.value).toEqual(2);
  });

  test('#INSERTAFTER: find value input and place newValue after in the node list', () => {
    const testList = new LinkedList();
    testList.append(1);
    testList.append(2);
    testList.append(3);
    testList.insertAfter(2, 1);
    expect(testList.head.next.value).toEqual(2);
  });
});
