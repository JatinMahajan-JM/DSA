class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    var node = new Node(value);
    if (!this.head) this.head = this.tail = node;
    else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    while (current.next !== this.tail && this.head !== this.tail)
      current = current.next;
    this.tail = current;
    const popped = this.tail.next === null ? this.tail : this.tail.next;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return popped;
  }

  shift() {
    if (!this.head) return undefined;
    const shifted = this.head;
    if (this.head.next) this.head = this.head.next;
    else this.head = this.tail = null;
    this.length--;
    return shifted;
  }

  unshift(value) {
    const node = new Node(value);
    node.next = this.head;
    if (!this.head) this.head = this.tail = node;
    else this.head = node;
    this.length++;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    let current = this.head,
      count = 0;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    // let count = 0,
    //   current = this.head;
    // while (count !== index - 1) {
    //   current = current.next;
    //   count++;
    // }
    const node = new Node(value);
    // node.next = current.next;
    // current.next = node;
    // this.length++;

    const prev = this.get(index - 1);
    node.next = prev.next;
    prev.next = node;
    this.length++;
  }
}

const list = new SingleLinkedList();
// list.push("value 1");
// list.push("value 2");
// list.push("value 3");
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.pop());
list.unshift("Unshifted val");
list.unshift("Unshift val2");
list.unshift("Unshift val3");
console.log(list.get(1));
list.set(0, "set value");
list.insert(2, "The insert method");
console.log(list);
for (let i = 0; i < list.length; i++) {
  console.group(list.get(i), "\u001b[" + 31 + "m" + "List Item" + "\u001b[0m");
}
