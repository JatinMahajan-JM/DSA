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
console.log(list);
