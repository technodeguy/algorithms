class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value, null);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size += 1;
  }

  pop() {
    if (this.isEmpty()) return 'Stack is empty';

    const node = this.head;
    this.head = this.head.next;
    this.size -= 1;

    return node.value;
  }

  peek() {
    if (this.isEmpty()) return 'Stack is empty';

    return this.head.value; 
  }

  clearStack() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return !this.size;
  }

  getSize() {
    return this.size;
  }

  printAll() {
    console.log('head ---> ', this.head)
  }
}

const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(20);

stack.clearStack()

console.log(stack.peek())
