class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value, null);

    if(this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while(current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  dequeue() {
    if(this.isEmpty()) return 'Queue is empty';

    const node = this.head;
    this.head = this.head.next;
    this.size--;

    return node.value;
  }

  peek() {
    if(this.isEmpty()) return 'Queue is empty';

    return this.head.value;
  }
  deleteQueue() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return !this.head;
  }
}

// const queue = new Queue();

// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);

// queue.dequeue()
// queue.deleteQueue()

// console.log(queue.peek())

module.exports = Queue;