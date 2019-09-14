class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;  
  }

  insertRandom() {
    const node = new Node(10);

    node.left = new Node(8);
    node.right = new Node(15);

    node.left.left = new Node(4);
    node.left.right = new Node(9);

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


  search(root, value) {

    if (root === null) {
      return null;
    } else if (value === root.value) {
      return root;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else if (value > root.value) {
      return this.search(root.right, value);
    }
  }

  searchMin(current) {
    if (current === null) return null;
    else if (current.left === null) return current;
    else return this.searchMin(current.left);
  }

  searchMax(current) {
    if (current === null) return null;
    else if (current.right === null) return current;
    else return this.searchMax(current.right);
  }

  insertValue(current, value) {
    if (current === null) {
      return new Node(value);
    } else if (value < current.value) {
      current.left = this.insertValue(current.left, value)
    } else current.right = this.insertValue(current.right, value);

    return current;
  }

  insert(value) {
    if (value === undefined) return;
    this.root = this.insertValue(this.root, value);
  }

  removeDeepestLeft(current) {
    if (current === null) return null;

    if (current.left === null && current.right === null) {
      return null
    } else if (current.left === null) {
      return current.right;
    } 

    current.left = this.removeDeepestLeft(current.left);

    return current;
  }

  remove(current, value) {
    if (current === null) {
      return null;
    } else if (current.value > value) {
      current.left  = this.remove(current.left, value);
    } else if (current.value < value) {
      current.right = this.remove(current.right, value);
    } else if (current.value === value) {
      if (current.left !== null && current.right !== null) {
        const successor = this.searchMin(current.right);
        current.value = successor.value;
        current.right = this.removeDeepestLeft(current.right);
      } else if (current.left !== null) {
        current = current.left;
      } else if (current.right !== null) {
        current = current.right;
      } else { 
        current = null 
      };
    }

    return current;
  }

  deleteBinarySearchTree() {
    this.root = null;
  }
}

const bstree = new BinarySearchTree();

// bstree.insertRandom();

// console.log(bstree.search(bstree.root, 4))

bstree.insert(100)
bstree.insert(300)
bstree.insert(400)
bstree.insert(350)
bstree.insert(410)
bstree.insert(80)
bstree.insert(70)
bstree.insert(90)
bstree.insert(50)
bstree.insert(40)
bstree.insert(60)
bstree.insert(200)
bstree.insert(150)
bstree.insert(140)
bstree.insert(160)

// console.log(bstree.search(bstree.root, 6))

// bstree.removeDeepestLeft(bstree.root)
// bstree.removeDeepestLeft(bstree.root)
// bstree.removeDeepestLeft(bstree.root)
// bstree.removeDeepestLeft(bstree.root.right.right)
// console.log(bstree.root)
//console.log(bstree.searchMax(bstree.root))


bstree.remove(bstree.root, 100)
// bstree.remove(bstree.root, 999)
// bstree.remove(bstree.root, 410)
// bstree.remove(bstree.root, 400)
// bstree.remove(bstree.root, 400)

// console.log(bstree.root)
bstree.inorderTraversal(bstree.root)
