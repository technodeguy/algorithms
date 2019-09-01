class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertFirst(value) {
    const newNode = new Node(value, null);

    if (this.size === 0) {      
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      const following = this.head;
      this.head = newNode;
      newNode.next = following;
      this.tail.next = this.head;
    }

    this.size += 1;
  }

  insertLast(value) {
    if (this.size === 0) {
      this.insertFirst(value)
    } else {
      const newNode = new Node(value, null);
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
      this.size += 1;
    }
  }

  insertAt(value, index) {
    if(index >= this.size || this.size === 0){
      return;
    }

    let current = this.head;
    let previous = null;

    do {
      previous = current;

      current = current.next;

      index -= 1;
    } while (index + 1 > 0)

    previous.next = new Node(value, current);
    this.size += 1;
  }

  removeAt(index) {
    if(index + 2 >= this.size || this.size === 0){
      return;
    }

    let current = this.head;
    let previous = null;

    while (index >= 0) {

      previous = current;

      current = current.next;

      index -= 1;
    }

    previous.next = current.next;
    this.size -= 1;
  }

  removeFirst() {
    if (this.size === 0) return;

    if (this.size === 1) {
      return this.clearList()
    }

    this.head = this.head.next;
    this.tail.next = this.head;
    this.size -= 1;
  }

  clearList() {
    this.tail.next = null;
    this.head = null;
    this.tail = null;

    this.size = 0;
  }

  removeLast() {
    let current = this.head;
    if (this.head === this.tail) {
      return this.clearList()
    }
    while (current.next !== this.tail) {

      current = current.next;
    }

    current.next = this.tail.next;
    this.tail = current;
    this.size -= 1;
  }

  traverseAt(index) {

    if(index > this.size){
      return -1;
    }
    let current = this.head;

    while(index !== 0) {
      current = current.next;

      index -= 1;
    }

    console.log(current.value)
  }

  traverseAll() {
    if (this.size <= 0) return;

    let output = 'head ---> '
    let current = this.head;

    do {

      output += '|VAL ' + current.value + '| ---> ';
      current = current.next;
    }
    while (current !== this.head);

    console.log(output + ' head')
  }

  printAll() {
    console.log(this.size)
    console.log(this.head)
  }

  reverse() {
    let current = this.head;
    let previous = null;

    do {
      if (current === this.head) {
        this.tail = current;
      }

      let following = current.next;
      current.next = previous;

      previous = current;
      current = following;
    }

    while (current !== this.head);

    this.head = previous;
    this.tail.next = this.head;
  }

  getSize(){
    return this.size;
  }
}

const cll = new CircularLinkedList();

// cll.insertLast(300)
cll.insertFirst(200)
cll.insertFirst(100);

cll.insertFirst(50)
// cll.insertLast(100)

// cll.removeLast()
// cll.removeLast()
// cll.removeFirst()

// console.log(cll.getSize())

//cll.reverse()
// cll.insertAt(49, 55)
//cll.traverseAt(3)
cll.removeAt(1)
// cll.traverseAll()
cll.printAll()

