'use strict';

import Queue from './queue';

function breadthFirstTraversal(rootNode) {
  if (!rootNode) return null;
  
  const queue = new Queue();
  let levels = '';
  queue.enqueue(rootNode);

  while (!queue.isEmpty()) {
    const parent = queue.storage[queue.storage.length - 1];
    queue.dequeue();
    if (parent.left) queue.enqueue(parent.left);
    if (parent.right) queue.enqueue(parent.right);
    levels += parent.value;
  }
  return levels;
}

export default breadthFirstTraversal;
