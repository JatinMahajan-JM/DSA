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

  insert(value) {
    let node = new Node(value);
    if (!this.root) return (this.root = node);
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value > current.value) {
        if (current.right) current = current.right;
        else {
          current.right = node;
          return this;
        }
      } else {
        if (current.left) current = current.left;
        else {
          current.left = node;
          return this;
        }
      }
    }
  }

  // find()
}

const bst = new BinarySearchTree();
bst.insert(1);
bst.insert(2);
bst.insert(0);
bst.insert(-4);
bst.insert(0);
console.log(bst);
console.log(bst.root.left.left);

// } else if (node.value <= current.value) {
