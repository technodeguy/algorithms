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
    leftChild.height = 1 + this.max(this.getHeight(leftChild.left), current.height);

    return leftChild;
  }

  rotateLeft(current) {
    const rightChild = current.right;
    const rightLeftChild = rightChild.left;

    rightChild.left = current;
    current.right = rightLeftChild;

    current.height = 1 + this.max(this.getHeight(current.left), this.getHeight(current.right));
    rightChild.height = 1 + this.max(current.height, this.getHeight(rightChild.right));

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

  search(value) {
    if (this.root === null) return null;

    let current = this.root;

    while (current.value !== value) {
      if (current.value < value) {
        if (current.right === null) {
          return current.right;
        } else {
          current = current.right;
        }
      }

      if (current.value > value) {
        if (current.left === null) {
          return current.left;
        } else {
          current = current.left;
        }
      }
    }

    return current;
  }

  searchMin() {
    let current = this.root;

    while (current.left !== null) {
      current = current.left
    }

    return current;
  }

  searchMax() {
    let current = this.root;

    while (current.right !== null) {
      current = current.right;
    }

    return current;
  }

  searchSuccessor(current) {
    while (current.left !== null) {
      current = current.left
    }

    return current;
  }

  removeSuccessor(current) {
    if (current === null) return null;

    if (current.left === null && current.right === null) { // leaf
      return null
    } else if (current.left === null) {
      return current.right;
    } 

    current.left = this.removeSuccessor(current.left);

    return current;
  }

  removeValue(current, value) {
    if (current === null) {
      return null;
    } else if (current.value > value) {
      current.left = this.removeValue(current.left, value);
    } else if (current.value < value) {
      current.right = this.removeValue(current.right, value);
    } else if (current.value === value) {
        if (current.left !== null && current.right !== null) {
          const successor = this.searchSuccessor(current.right);
          current.value = successor.value;
          current.right = this.removeSuccessor(current.right);
        } else if (current.left !== null) {
          current = current.left;
        } else if (current.right !== null) {
          current = current.right;
        } else { 
          return null;
      };
    }

    current.height = 1 + this.max(this.getHeight(current.left), this.getHeight(current.right)); 

    const balanceFactor = this.getBalanceFactor(current);

    if (balanceFactor > 1) {
      if (this.getBalanceFactor(current.left) >= 0) {
        return this.rotateRight(current); // left left
      } else {
        current.left = this.rotateLeft(current.left);
        return this.rotateRight(current) // left right
      }
    }

    if (balanceFactor < -1) {
      if (this.getBalanceFactor(current.right) <= 0) {
        return this.rotateLeft(current); // right right
      } else {
        current.right = this.rotateRight(current.right);
        return this.rotateLeft(current); // right left
      }
    }
    
    return current;
  }

  remove(value) {
    this.root = this.removeValue(this.root, value);
  } 

  countNodes(current) {
    if (current === null) return 0;

    return 1 + this.countNodes(current.left) + this.countNodes(current.right);
  }

  clearAVLTree() {
    this.root = null;
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


avl.remove(10)
avl.remove(20)
avl.remove(22)

avl.insert(99)
avl.insert(101)
// avl.remove(40)
//avl.remove(10)

console.log(avl.root)

// console.log(avl.search(22))

// console.log(avl.countNodes(avl.root))

// avl.inorderTraversal(avl.root)