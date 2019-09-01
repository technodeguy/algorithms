class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}


class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertFirst(value) {
    const node = new Node(value);

    if (this.size === 0) {
      node.next = null;
      node.prev = null;
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      node.prev = null;
      this.head.prev = node;
      this.head = node;  
    }

    this.size += 1;
  }

  insertLast(value) {
    if (this.size === 0) {
      return this.insertFirst(value)
    } 

    const node = new Node(value);

    node.next = null;
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.size += 1;
  }

  printAll() {
    console.log(this.size, this.head)
  }
  
  insertAt(value, index) {
    if (index >= this.size || index <= 0) {
      return -1;
    } 

    const node = new Node(value);

    let current = this.head;

    while (index > 0) {
      current = current.next;

      index -= 1;
    }

    node.next = current;
    node.prev = current.prev
    current.prev.next = node;
    current.prev = node;
    
    this.size += 1;
  }

  removeFirst() {
    if (this.size == 0) return;

    if (this.size === 1) {
      this.emptyHeadAndTail()
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      this.size -= 1;
    }
  }

  removeLast() {
    if (this.size == 0) return;

    if (this.size === 1) return this.emptyHeadAndTail();

    this.tail = this.tail.prev;
    this.tail.next = null;

    this.size -= 1;
  }

  removeAt(index) {
    if (index + 1 >= this.size || index <= 0) return -1;

    let current = this.head;

    while (index > 0) {

      current = current.next;
      index -= 1;
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;
    this.size -= 1;
  }

  reverse() {
    let current = this.head;
    let previous = null;

    if (this.size === 1) return;

    while (current !== null) {
      if (current === this.head) {
        this.tail = current;
      }

      const following = current.next;
      current.next = previous;
      current.prev = following;

      previous = current
      current = following;
    }

    this.head = previous;
  }

  clearList() {
    let current = this.head;

    while (current !== null) {
      current.prev = null;
      current = current.next;
    }

    this.emptyHeadAndTail();
  }

  emptyHeadAndTail() {
    this.head = this.tail = null;
    this.size = 0;
  }

  traverseAll() {
    let current = this.head;
    let output = 'head ---> '

    while(current !== null) {
      output += '|VAL ' + current.value + '| ---> ';

      current = current.next;
    }

    console.log(output + ' null')
  }
}

const dll = new DoubleLinkedList()

dll.insertFirst(10)
dll.insertLast(20)
dll.insertLast(30)

// dll.removeFirst()
dll.reverse()
//dll.reverse()
// dll.removeLast()
// dll.removeLast()
//dll.removeLast()
//dll.insertAt(15, 7)

//dll.removeAt(4)
dll.traverseAll()
//dll.printAll()