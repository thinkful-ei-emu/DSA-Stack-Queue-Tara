const { Queue, peek, isEmpty, display} = require('./Queue');

function is_palindrome(s) {
  wordStack = new Stack();
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  for (let i = 0; i < s.length; i++) {
    wordStack.push(s[i]);
  }

  for (let i = 0; i < s.length; i++) {
    if (wordStack.pop() !== s[i]) {
      return false;
    }
  }

  return true;
}

function paraMatch(s) {
  wordStack = new Stack();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      wordStack.push(s[i]);
    }
    if (s[i] === ')') {
      try {
        wordStack.pop();
      } catch {
        return console.error(`Extra close at ${i}`);
      }
    }
  }

  if (peek(wordStack)) {
    return console.error('Extra open.');
  }

  return true;
}

function remove(stack, val) {
  let curr = stack.pop();

  if (curr === val) {
    return;
  } else {
    remove(stack, val);
    stack.push(curr);
  }
}

function sort(stack) {
  let stack2 = new Stack;
  let stack3 = new Stack;

  function sorter(stack1, stack2, stack3) {
    if(!stack1.top && !stack2.top) {
      return;
    }

    let val = peek(stack1).value;

    while (peek(stack1) !== null) {
      if (peek(stack1).value > val) {
        val = peek(stack1).value;
      }
      stack2.push(stack1.pop());
    }

    while (peek(stack2) !== null) {
      if (peek(stack2).value === val) {
        stack3.push(stack2.pop());
      }
      else {
        stack1.push(stack2.pop());
      }

    }
    sorter(stack1, stack2, stack3);
  }
  sorter(stack, stack2, stack3);
  return stack3;
}

function pair(queue) {
  let MSpares = new Queue;
  let FSpares = new Queue;

  while (queue.first) {
    (queue.first.value[0] === 'M') ? MSpares.enqueue(queue.dequeue()) : FSpares.enqueue(queue.dequeue());
  }

  while(MSpares.first && FSpares.first) {
    console.log(`Female dancer is ${FSpares.dequeue()}, male dancer is ${MSpares.dequeue()}`);
  }

  if(MSpares.first) {
    console.log('There are male dancers left');
  }
  else if(FSpares.first) {
    console.log('There are female dancers left');
  }
  else {
    console.log('There are no dancers left');
  }
}

const testQueue = new Queue;

testQueue.enqueue('F Jane');
testQueue.enqueue('M Frank');
testQueue.enqueue('M John');
testQueue.enqueue('M Sherlock');
testQueue.enqueue('F Madonna');
testQueue.enqueue('M David');
testQueue.enqueue('M Christopher');
testQueue.enqueue('F Beyonce');

// display(testQueue);

pair(testQueue);

