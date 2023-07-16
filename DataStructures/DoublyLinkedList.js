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

  set(index, value) {
    if (index < 0 || index > this.length - 1) return undefined;
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) this.unshift(value);
    if (index === this.length) this.push(value);
    else {
      const node = new Node(value);
      const outNode = this.get(index - 1);
      outNode.next.prev = node; // 1 = 2 = 3 = 4
      node.next = outNode.next;
      outNode.next = node;
      node.prev = outNode;
    }
    this.length++;
    return true;
  }
}

const list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.insert(1, 2000);
console.group(
  "\u001b[" + 31 + "m" + "----------------NEW LINE-----------" + "\u001b[0m"
);
for (let i = 0; i < list.length; i++) {
  console.group(
    list.get(i),
    "\u001b[" + 32 + "m" + "List Item " + i + "\u001b[0m"
  );
}
console.log(list.get(1).prev);
// console.log(list);
