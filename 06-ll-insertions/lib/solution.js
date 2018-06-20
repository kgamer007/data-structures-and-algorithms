'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.next = null;
  }
  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.node = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  insertBefore(value, newValue) {
    const node = new Node(newValue);
    let beforeNode = this.head;
    let current = beforeNode.next;

    while (current) {
      if (current.value === value) {
        beforeNode.next = node;
        node.next = current;
        return this;
      }
      beforeNode = current;
      current = current.next;
    }
    return null;
  }

  insertAfter(value, newValue) {
    const node = new Node(newValue);
    let current = this.head;

    if (!this.head) {
      this.head = node;
      return this;
    }

    while (current) {
      if (current.value === value) {
        const holder = current.next;
        current.next = node;
        current.next.next = holder;
        break;
      }
      current = current.next;
    }
    return this;
  }
};
