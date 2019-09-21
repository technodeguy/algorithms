class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 0;
  }
}

class AVLTree {
  constructor() {
    this.root = null;  
  }

  inorderTraversal(root) {

    if (root === undefined || root === null) return;

    this.inorderTraversal(root.left);
    console.log(root.value);
    this.inorderTraversal(root.right);
  }

  max(left, right) {
    return left < right ? right : left;
  }
  
  getHeight(current) {
    if (current === null) {
      return -1;
    }

    return current.height;
  }

  getBalanceFactor(current) {
    return this.getHeight(current.left) - this.getHeight(current.right); 
  }

  rotateRight(current) {
    const leftChild = current.left;
    const leftRightChild = leftChild.right;

    leftChild.right = current;
    current.left = leftRightChild;

    current.height = 1 + this.max(this.getHeight(current.left), this.getHeight(current.right));

    return leftChild;
  }

  rotateLeft(current) {
    const rightChild = current.right;
    const rightLeftChild = rightChild.left;

    rightChild.left = current;
    current.right = rightLeftChild;

    current.height = 1 + this.max(this.getHeight(current.left), this.getHeight(current.right));

    return rightChild;
  }
  
  insertValue(current, value) {
    if (current === null) {
      return new Node(value);
    } else if (value < current.value) {
      current.left = this.insertValue(current.left, value)
    } else if (value > current.value) {
      current.right = this.insertValue(current.right, value);
    } else {
      return current;
    }

    current.height = 1 + this.max(this.getHeight(current.left), this.getHeight(current.right)); 

    const balanceFactor = this.getBalanceFactor(current);

    if (balanceFactor > 1 && value < current.left.value) {
      return this.rotateRight(current);
    } // left left

    if (balanceFactor < -1 && value > current.right.value) {
      return this.rotateLeft(current)
    } // right right

    if (balanceFactor > 1 && value > current.left.value) {
      current.left = this.rotateLeft(current.left);
      return this.rotateRight(current);
    } // left right

    if (balanceFactor < -1 && value < current.right.value) {
      current.right = this.rotateRight(current.right);
      return this.rotateLeft(current);
    } // right left

    return current;
  }

  insert(value) {
    if (value === undefined) return;
    this.root = this.insertValue(this.root, value);
  }
}

const avl = new AVLTree();

avl.insert(40)
avl.insert(20)
avl.insert(10)
avl.insert(25)
avl.insert(30)
avl.insert(22)
avl.insert(50)
avl.insert(55)


console.log(avl.root)