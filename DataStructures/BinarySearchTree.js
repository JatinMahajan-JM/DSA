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

  // find(value) {
  //   if (!this.root) return false;
  //   let current = this.root;
  //   while (true) {
  //     if (current.value === value) return current;
  //     if (value < current.value) {
  //       if (current.left) current = current.left;
  //       else return false;
  //     } else {
  //       if (current.right) current = current.right;
  //       else return false;
  //     }
  //   }
  // }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }

  BFS() {
    let current = this.root;
    let queue = [],
      data = [];
    queue.push(current);

    while (queue.length) {
      let current = queue.shift();
      data.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }

  DFSpreOrder() {
    const data = [];
    function transverse(node) {
      data.push(node.value);
      if (node.left) transverse(node.left);
      if (node.right) transverse(node.right);
    }
    transverse(this.root);
    return data;
  }

  DFSpostOrder() {
    const data = [];
    function transverse(node) {
      if (node.left) transverse(node.left);
      if (node.right) transverse(node.right);
      data.push(node.value);
    }
    transverse(this.root);
    return data;
  }

  DFSinOrder() {
    const data = [];
    function transverse(node) {
      if (node.left) transverse(node.left);
      data.push(node.value);
      if (node.right) transverse(node.right);
    }
    transverse(this.root);
    return data;
  }
}

const bst = new BinarySearchTree();
bst.insert(1);
bst.insert(2);
bst.insert(-4);
bst.insert(0);
bst.insert(0);
bst.insert(4);
//       1
//   -4       2
//       0        4
// console.log(bst);
// console.log(bst.root.left.left);
// console.log(bst.find(0));
// console.log(bst.BFS());
// console.log(bst.DFSpreOrder());
// console.log(bst.DFSpostOrder()); // 0 -4 4 2 1
console.log(bst.DFSinOrder()); // -4 0 1 2 4

// } else if (node.value <= current.value) {
