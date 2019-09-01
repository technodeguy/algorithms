class Stack {
  constructor() {
    this._items = [];
  }

  push(element) { 
    this._items.push(element); 
  }

  pop() {
    if (this.isEmpty()) return 'Stack is empty!'
    return this._items.pop()
  }
  
  peek() {
    if (this.isEmpty()) return 'Stack is empty'
    return this._items[this._items.length - 1]
  }

  isEmpty(){
    return this._items.length == 0;
  }

  size() {
    return this._items.length;
  }

  printStack() { 
      var str = ""; 
      for (var i = 0; i < this._items.length; i++) 
          str += this._items[i] + " "; 
      return str; 
  } 

  toArray() {
    return [...this._items];
  }
}

const stack = new Stack()

stack.push(5);
stack.push(10)

//stack.pop()
stack.toArray().push(88)

console.log(stack.printStack());
//console.log(stack.peek())

