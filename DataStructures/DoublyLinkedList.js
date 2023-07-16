class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) this.head = this.tail = node;
    else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(value) {
    const node = new Node(value);
    if (!head) this.head = this.tail = node;
    else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        count++;
        current = current.next;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        count--;
        current = current.prev;
      }
      return current;
    }
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
// list.pop();
// console.log(list.shift());
console.log(list.get(1));
console.log(list.get(3));
console.group(
  "\u001b[" + 31 + "m" + "----------------NEW LINE-----------" + "\u001b[0m"
);
for (let i = 0; i < list.length; i++) {
  console.group(
    list.get(i),
    "\u001b[" + 32 + "m" + "List Item " + i + "\u001b[0m"
  );
}
// console.log(list);
