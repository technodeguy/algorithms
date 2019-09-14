class Queue {
  constructor() {
    this._items = []
  }
  
  enqueue(element) {
    this._items.push(element)
  }
  
  dequeue() {
    if (this.isEmpty()) return 'Queue is empty' 
    return this._items.shift()
  }
  
  peek() {
    if (this.isEmpty()) return 'Queue is empty'
    return this._items[0]
  }
  
  isEmpty() {
    return !this._items.length
  }
}

const queue = new Queue()

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);

console.log(queue.dequeue())