class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  //insertion - 0(1)
  //removal, searching and accessing - 0(N)
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
    const node = new Node(value);
    const prev = this.get(index - 1);
    node.next = prev.next;
    prev.next = node;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prev = this.get(index - 1);
    prev.next = prev.next.next;
    this.length--;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    while (node !== null) {
      let next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

const list = new SingleLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.set(0, -1);
console.group(
  "\u001b[" + 32 + "m" + "----------------NEW LINE-----------" + "\u001b[0m"
);
list.reverse();
for (let i = 0; i < list.length; i++) {
  console.group(
    list.get(i),
    "\u001b[" + 31 + "m" + "List Item " + i + "\u001b[0m"
  );
}
