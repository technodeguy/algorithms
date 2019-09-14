const Queue = require('../queue/list');

class Node  {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insertRandom() { 
    const node = new Node(10);

    node.left = new Node(15);
    node.right = new Node(25);

    node.left.left = new Node(35);
    node.left.right = new Node(45);

    node.left.left.left = new Node(80);
    node.left.left.right = new Node(90);

    node.left.left.right.right = new Node(350);

    node.left.right.left = new Node(50)
    node.left.right.left.left = new Node(70);

    node.left.right.right = new Node(65)



    node.right.left = new Node(18);
    node.right.right = new Node(36);

    node.right.right.right = new Node(93);

    this.root = node;
  }

  preorderTraversal(root) {

    if (root === undefined || root === null) return;

    console.log(root.value);

    this.preorderTraversal(root.left);
    this.preorderTraversal(root.right);
  }

  inorderTraversal(root) {

    if (root === undefined || root === null) return;

    this.inorderTraversal(root.left);
    console.log(root.value);
    this.inorderTraversal(root.right);
  }

  postorderTraversal(root) {

    if (root === undefined || root === null) return;

    this.postorderTraversal(root.left);
    this.postorderTraversal(root.right);
    console.log(root.value);
  }

  levelOrderTraversal() {
    if (this.root === null) return;

    const queue = new Queue();
 
    queue.enqueue(this.root);

    while(!queue.isEmpty()) {
      const { left: leftChild, right: rightChild } = queue.peek();
      
      if (leftChild) {
        queue.enqueue(leftChild);
      }
      if (rightChild) {
        queue.enqueue(rightChild);
      }

      console.log(queue.dequeue().value);
    }
  }

  search(value) {
    if (this.root === null) return false;

    const queue = new Queue();
 
    queue.enqueue(this.root);

    while(!queue.isEmpty()) {
      const { left: leftChild, right: rightChild } = queue.peek();
      
      if (leftChild) {
        queue.enqueue(leftChild);
      }
      if (rightChild) {
        queue.enqueue(rightChild);
      }

      if (queue.dequeue().value === value) return true;
    }

    return false;
  }

  insert(value) {
    const node = new Node(value);

    if (this.root === null) this.root = node;
    else {
      const queue = new Queue();
 
      queue.enqueue(this.root);

      while(!queue.isEmpty()) {
        const current = queue.peek();
        
        if (current.left === null) return current.left = node;
        else if (current.right === null) return current.right = node;
        else {
          queue.enqueue(current.left);
          queue.enqueue(current.right); 
        }

        queue.dequeue();
      } 
    }
  }

  removeDeepest(deepestNode) {
    const queue = new Queue();

    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      const current = queue.dequeue();

      if (current.left !== null) {
        if (current.left == deepestNode) {
          current.left = null;
          return;
        } else {
          queue.enqueue(current.left);
        }
      }

      if (current.right !== null) {
        if (current.right == deepestNode) {
          current.right = null;
          return;
        } else {
          queue.enqueue(current.right);
        }
      }
    }
  }

  remove(value) {
    if (this.root === null) return;

    if (this.root.left === null && this.root.right === null) {
      if (this.root.value === value) this.root = null;
      else return;
    }

    let current = null;
    let foundNode = null;

    const queue = new Queue();

    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      current = queue.dequeue();

      if (current.value === value) {
        foundNode = current;
      }

      if (current.left) queue.enqueue(current.left);
      if (current.right) queue.enqueue(current.right);
    }

    if (foundNode !== null) {
      foundNode.value = current.value;
      this.removeDeepest(current);
    }    
  }

  clearTree() {
    this.root = null;
  }
}

const btree = new BinaryTree();

// btree.insertRandom()

btree.insert(10);
btree.insert(15)
btree.insert(25)
btree.insert(35)
btree.insert(45)
btree.insert(18)
btree.insert(36)
btree.insert(80)

// btree.preorderTraversal(btree.root)

btree.remove(80);

// btree.inorderTraversal(btree.root)
// btree.postorderTraversal(btree.root)
//btree.clearTree();
btree.levelOrderTraversal();

// console.log(btree.search(70));