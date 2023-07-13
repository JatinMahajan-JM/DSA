class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor(head, tail, length) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    var node = new Node(value);
    if (!this.head) this.head = this.tail = node;
    else {
      this.head.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
}

const list = new SingleLinkedList();
list.push("value 1");
list.push("value 2");
console.log(list);
