'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null; 
    this.tail = null;
  }
  
  insertAtEnd(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  insertAtKthEnd(value) {
    let counter = 0;
    let currentNode = this.head;
    let nodeValue = this.head;

    while (currentNode.next !== null) {
      counter += 1;
      currentNode = currentNode.next;
    }
    counter -= value;
    for (let i = 0; i < counter - 1; i++) {
      nodeValue = nodeValue.next;
    }
    return nodeValue.value;
  }
};
