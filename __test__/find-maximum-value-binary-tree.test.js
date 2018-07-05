'use strict';

import Node from '../node';
import BinaryTree from '../binary-tree';
import maxValueTraversal from '../find-maximum-value-binary-tree';

describe('#maxValueTraversal', () => {
  test('should return null if empty', () => {
    const tree = new BinaryTree(null);
    expect(maxValueTraversal(tree.root)).toBeNull();
  });
 
  test('should return (90)', () => {
    let tree = null;
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const ninety = new Node(90);
    const negFive = new Node(-5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const thirty = new Node(30);
    tree = new BinaryTree(one);

    one.left = two;
    one.right = three;
    three.left = ninety;
    three.right = negFive;
    two.left = six;
    six.right = seven;
    six.left = thirty;
    seven.left = eight;
    seven.right = nine;

    expect(maxValueTraversal(tree.root)).toEqual(90);
  });
});
