class Node {
  constructor(val, priority) {
    this.val = val;
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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];

    let smallest;

    //fill up the variables with initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    //End of fill up the variables with initial state

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // this is the base case
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        //this.adjacencyList[random_number] is what?, this is array for sure, but it contains {node, priority}
        for (let neighbor in this.adjacencyList[smallest]) {
          //select the random first neighbor
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate the distance to get to this node, nextNode.weight will give us the distance from B -> A because we get this node because of A. 0 + A -> B;
          let currDistance = distances[smallest] + nextNode.weight;
          //Now let say we have a vertex to which there are different paths to get, we have checked the first path and we don't know if it is shortest, so we compare it here and then update the value.
          if (currDistance < distances[nextNode.node]) {
            distances[nextNode.node] = currDistance;
            previous[nextNode.node] = smallest;
            //update priority queue with new smallest for the vertex
            nodes.enqueue(nextNode.node, currDistance);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "E"));
