'use strict';

let maxVal = null;

function maxValTraversal(rootNode) {
  if (!rootNode) return null;

  if (rootNode.value > maxVal) {
    maxVal = rootNode.value;
  }

  maxValTraversal(rootNode.left);
  maxValTraversal(rootNode.right);

  return maxVal;
}

export default maxValTraversal;
