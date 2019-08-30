const _Node = require('./NOde');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function peek(queue) {
  return queue.first;
}

function isEmpty(queue) {
  return (queue.first === null);
}

function display(queue) {
  let currentNode = queue.first;
  while (currentNode !== null) {
    console.log(currentNode);
    currentNode = currentNode.next;
  }
}

module.exports = { Queue, peek, isEmpty, display};