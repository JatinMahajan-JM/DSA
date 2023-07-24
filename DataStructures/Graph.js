//Undirected adjacent list graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (vertex) => vertex !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (vertex) => vertex !== v1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const currVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(currVertex, vertex);
    }
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex("v1");
graph.addVertex("v2");
graph.addVertex("v3");
graph.addVertex("v4");
graph.addEdge("v1", "v4");
graph.addEdge("v2", "v3");
graph.addEdge("v2", "v1");
graph.addEdge("v4", "v3");
// graph.removeEdge("v1", "v2");
graph.removeVertex("v1");
console.log(graph);
