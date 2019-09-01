class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    this.head = new Node(value, this.head);
  }

  insertLast(value) {
    let current = this.head;

    if (current == null) {
      return this.insertFirst(value);
    }

    while (current.next) {
      
      current = current.next;
    }

    current.next = new Node(value);
  }

  insertAt(value, index) {
    let current = this.head;
    let count = 0;

    if (current == null) {
      return;
    }

    while (current.next !== null) {

      if (count === index) {
        current.next = new Node(value, current.next);
        return
      }

      current = current.next;
      count += 1;
    }

    console.log('out of range')
  }

  removeFirst() {
    if (this.head !== null) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    let current = this.head;
    let previous = null;
    
    if (current === null) return;

    if (current.next === null) {
      return this.head = null;
    } 

    while(current.next !== null) {
      previous = current;

      current = current.next;
    }

    previous.next = null
  }

  removeAt(index) {
    let current = this.head;
    let previous = null;
    let count = 0;

    if (current === null) return;

    while(current.next !== null) {
      if (count === index) {

        if (previous === null) return

        previous.next = current.next
        return;
      }

      previous = current
      current = current.next;
      count += 1;
    }
  }

  removeByValue(value) {
    let current = this.head;
    let previous = null;

    while(current !== null) {
      
      if (current.value === value) {
        if (previous) {
          previous.next = current.next;
        } else {
          this.removeFirst();
        }
      }

      previous = current;
      current = current.next;
    }
  }

  getAt(index) {
    let current = this.head;
    let count = 0;

    while(current !== null) {
      if (count === index) {
        console.log(current.value);
        return;
      }

      current = current.next;
      count += 1;
    }

    console.log('such element does not exist')
  }

  printList() {
    let current = this.head;
    let output = 'head ---> '

    while(current !== null) {
      output += '|VAL ' + current.value + '| ---> ';

      current = current.next;
    }

    console.log(output + ' null')
  }
  

  reverse() {
    let current = this.head;
    let previous = null;

    while(current !== null) {
      const following = current.next;
      current.next = previous;
      
      previous = current;
      current = following;
    }

    this.head = previous;
  }
}

const ll = new LinkedList();

ll.insertFirst(10);
ll.insertFirst(5)
ll.insertFirst(4);

ll.reverse()

ll.printList()