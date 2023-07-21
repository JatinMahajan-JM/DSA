class MaxBinaryHeap {
  constructor() {
    this.values = [90];
  }

  insert(element) {
    this.values.push(element);
    let currentindex = this.values.length - 1;
    console.log(currentindex, element);
    while (currentindex > 0) {
      let parentIndex = Math.floor((currentindex - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[currentindex] = parent;
      currentindex = parentIndex;
    }
  }

  // extractMax() {
  //   const root = this.values[0];
  //   this.values[0] = this.values.pop();
  //   const length = this.values.length;
  //   const element = this.values[0];
  //   let currentindex = 0;
  //   while (true) {
  //     const leftChildIndex = 2 * currentindex + 1;
  //     const rightChildIndex = 2 * currentindex + 2;
  //     let leftChild, rightChild;

  //     if (leftChildIndex < length) leftChild = this.values[leftChildIndex];
  //     if (rightChildIndex < length) rightChild = this.values[rightChildIndex];

  //     let max = leftChild;
  //     if (leftChild && rightChild) max = Math.max(leftChild, rightChild);

  //     let swap = null;
  //     if (max === leftChild && element > leftChild) swap = leftChildIndex;
  //     if (max === rightChild && element > rightChild) swap = rightChildIndex;
  //     if (swap === null) break;
  //     if (element < max) {
  //       this.values[currentindex] = max;
  //       this.values[swap] = element;
  //       currentindex = swap;
  //     }
  //   }
  //   return root;
  // }

  extractMax() {
    const root = this.values[0];
    let element = this.values.pop();
    let currentindex = 0;
    if (this.values.length > 0) {
      this.values[0] = this.values.pop();
      const length = this.values.length;

      while (true) {
        const leftChildIndex = 2 * currentindex + 1;
        const rightChildIndex = 2 * currentindex + 2;
        let leftChild,
          rightChild,
          swap = null;

        if (leftChildIndex < length) {
          leftChild = this.values[leftChildIndex];
          if (leftChild > element) swap = leftChildIndex;
        }
        if (rightChildIndex < length) {
          rightChild = this.values[rightChildIndex];
          if (
            (swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild)
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

const heap = new MaxBinaryHeap();
// heap.insert(120);
// heap.insert(10);
// heap.insert(20);
// heap.insert(200);
console.log(heap.extractMax());
console.log(heap.extractMax());

console.log(heap.values);
