class MinHeap {
  constructor() {
    this.head = [null];
  }

  swap(leftIndex, rightIndex) {
    const temp = this.head[leftIndex];
    this.head[leftIndex] = this.head[rightIndex];
    this.head[rightIndex] = temp;
  } 

  getParentIndex(childIndex) {
    return Math.floor(childIndex / 2);
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2;
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }
  
  isLeaf(index) {
    if (index > Math.floor((this.head.length - 1) / 2)) {
      return true;
    }

    return false;
  }

  heapifyBottomToTop() {
    let lastChildIndex = this.head.length - 1; 

    while (lastChildIndex > 1 && this.head[lastChildIndex] < this.head[this.getParentIndex(lastChildIndex)]) {
      this.swap(this.getParentIndex(lastChildIndex), lastChildIndex);
      lastChildIndex = this.getParentIndex(lastChildIndex);
    }
  }

  heapifyTopToBottom() {
    let currentIndex = 1;

    if (!this.isLeaf(currentIndex)) {
      while (currentIndex < this.head.length && this.head[currentIndex] > this.head[this.getLeftChildIndex(currentIndex)] || this.head[currentIndex] > this.head[this.getRightChildIndex(currentIndex)]) {
        if (this.head[this.getLeftChildIndex(currentIndex)] > this.head[this.getRightChildIndex(currentIndex)]) {
          this.swap(currentIndex, this.getRightChildIndex(currentIndex));
          currentIndex = this.getRightChildIndex(currentIndex);
        } else {
          this.swap(currentIndex, this.getLeftChildIndex(currentIndex));
          currentIndex = this.getLeftChildIndex(currentIndex);
        }
      }
    }
  }

  insert(value) {
    this.head.push(value);
    this.heapifyBottomToTop();
  }

  peekMin() {
    return this.head[1];
  }

  extractMin() {
    const child = this.head[1];
    this.head[1] = this.head.pop();

    this.heapifyTopToBottom();

    return child;
  }
}

const minHeap = new MinHeap();

minHeap.insert(100)
minHeap.insert(10)
minHeap.insert(50)
minHeap.insert(200)
minHeap.insert(9)
minHeap.extractMin()
minHeap.extractMin()
minHeap.extractMin()

console.log(minHeap.head)
