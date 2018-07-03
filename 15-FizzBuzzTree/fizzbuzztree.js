'use strict';

const binaryTree = require('./binary-tree');

function fizzBuzzTree() {
  if (!binaryTree) return undefined;

  if (binaryTree.value % 3 === 0 && binaryTree.value % 5 === 0) {
    binaryTree.value = 'fizzBuzzTree';
  } else if (binaryTree.value % 5 === 0) {
    binaryTree.value = 'buzz';
  } else if (binaryTree.value % 3 === 0) {
    binaryTree.value = 'fizz';
  }

  return undefined;
}
fizzBuzzTree(binaryTree.left);
fizzBuzzTree(binaryTree.right);
