'use strict';

const Node = require('./node');

function mergeLists(listOne, listTwo) {
  let currentNode = listOne.head;
  let currentNode2 = listTwo.head;

  while (currentNode.next) {

    if (!currentNode) {
      currentNode = listOne.head;
    }

    if (!temp) {
      temp = currentNode.next;
    }

    currentNode.next = listTwo.head;
    currentNode = currentNode.next;
    listTwo.head = listTwo.head.next;
    currentNode.next = temp;
    temp = temp.next;
    currentNode = currentNode.next;
  }
}
