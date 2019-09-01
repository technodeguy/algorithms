class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}


class CircularDoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertFirst(value) {
    const node = new Node(value);

    if (this.size === 0) {
      node.next = node;
      node.prev = node;
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      node.prev = this.tail;
      this.head.prev = node;
      this.head = node;
      this.tail.next = node;
    }

    this.size += 1;
  }

  insertLast(value) {
    if (this.size === 0) {
      return this.insertFirst(value)
    } 

    const node = new Node(value);

    node.next = this.head;
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.head.prev = this.tail;
    this.size += 1;
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
    node.prev.next = node;
    current.prev = node;
    
    this.size += 1;
  }

  removeFirst() {
    if (this.size == 0) return;

    if (this.size === 1) {
      this.removeFirstAndOnlyOne()
    } else {      
      this.head = this.head.next;
      this.head.prev = this.tail;
      this.tail.next = this.head;
      this.size -= 1;
    }
  }

  removeLast() {
    if (this.size == 0) return;

    if (this.size === 1) return this.removeFirstAndOnlyOne();

    this.tail = this.tail.prev;
    this.tail.next = this.head;
    this.head.prev = this.tail;

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

    if (this.size === 1) return;

    do {
      const following = current.next;
      current.next = current.prev;
      current.prev = following;

      current = following;
    }
    while (current !== this.head);

    this.tail.prev = this.head;
    this.head.next = this.tail;
    
    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  clearList() {
    if (this.size == 0) return;

    this.tail.next = null;

    let current = this.head;

    while (current !== null) {
      current.prev = null;

      current = current.next;
    }

    this.tail = null;
    this.head = null;

    this.size = 0;
  }

  removeFirstAndOnlyOne() {
    this.head.next = null;
    this.head.prev = null;
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  traverseAll() {
    let current = this.head;
    let output = 'head ---> '

    do {
      output += '|VAL ' + current.value + '| ---> ';

      current = current.next;
    }
    while(current !== this.head);

    console.log(output + ' null')
  }

  printAll() {
    console.log(this.head);
  }
}

const cdll = new CircularDoubleLinkedList();

cdll.insertFirst(20);
cdll.insertFirst(10);
cdll.insertLast(30)

cdll.insertLast(40)
cdll.insertFirst(5)
cdll.insertLast(50)

// cdll.removeFirst()
// cdll.removeFirst()
// cdll.removeFirst()

// cdll.removeLast()
// cdll.removeLast()
// cdll.removeLast()

cdll.reverse()
cdll.reverse()
cdll.insertAt(15, 1)
cdll.removeAt(7)

cdll.traverseAll()
//cdll.printAll()