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
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.group(
  "\u001b[" + 32 + "m" + "----------------NEW LINE-----------" + "\u001b[0m"
);
// for (let i = 0; i < list.length; i++) {
//   console.group(
//     list.get(i),
//     "\u001b[" + 31 + "m" + "List Item " + i + "\u001b[0m"
//   );
// }
console.log(list);
