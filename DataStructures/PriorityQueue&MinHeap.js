class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    let currentindex = this.values.length - 1;
    // console.log(currentindex, element);
    const element = newNode;
    while (currentindex > 0) {
      let parentIndex = Math.floor((currentindex - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[currentindex] = parent;
      currentindex = parentIndex;
    }
  }

  dequeue() {
    const root = this.values[0];
    let element = this.values.pop();
    let currentindex = 0;
    if (this.values.length > 0) {
      this.values[0] = element;
      const length = this.values.length;

      while (true) {
        const leftChildIndex = 2 * currentindex + 1;
        const rightChildIndex = 2 * currentindex + 2;
        let leftChild,
          rightChild,
          swap = null;

        if (leftChildIndex < length) {
          leftChild = this.values[leftChildIndex];
          if (leftChild.priority < element.priority) swap = leftChildIndex;
        }
        if (rightChildIndex < length) {
          rightChild = this.values[rightChildIndex];
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIndex;
          }
        }
        if (swap === null) break;
        this.values[currentindex] = this.values[swap];
        this.values[swap] = element;
        currentindex = swap;
      }
    }
    return root;
  }
}

const priorQueue = new PriorityQueue();
priorQueue.enqueue(1, 5);
priorQueue.enqueue(1, 10);
priorQueue.enqueue(1, 6);
console.log(priorQueue.dequeue());
console.log(priorQueue);
