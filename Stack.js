const _Node = require('./Node');

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    /* If the stack is empty, then the node will be the
       top of the stack */
    if (this.top === null) {
      this.top = new _Node(value, null);
      return this.top;
    }

    /* If the stack already has something, 
       then create a new node,
       add value to the new node, and
       have the pointer point to the top */
    const node = new _Node(value, this.top);
    this.top = node;
  }

  pop() {
    /* In order to remove the top of the stack, you have to point
     the pointer to the next item and that next item becomes the
     top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.value;
  }
}

function peek(stack) {
  return stack.top;
}

function isEmpty(stack) {
  return (stack.top === null);
}

function display(stack) {
  let currentNode = stack.top;
  while (currentNode !== null) {
    console.log(currentNode);
    currentNode = currentNode.next;
  }
}
 
module.exports = { Stack, peek, isEmpty, display};
