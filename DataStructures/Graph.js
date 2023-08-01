//Undirected & Unweighted adjacent list graph
//To make it more efficient we can use set for keeping track of visited node and a map to use as a adjacency List
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

  //1. Start with the given vertex, mark it as visited and push in traversed Array.
  //2. Select the vertex's first neighbor, mark it as visited and push
  //3. Move to neighbor's neighbor, check its neighbors, don't do anything on already visited vertex
  //4. Repeat.
  // Start -> First or Left neighbor -> It's neighbor -> It's neighbor (check if its neighbor is visited)
  depthFirstRec(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) {
          return dfs(v);
        }
      });
    })(start);

    return result;
  }

  depthFirstIterate(start) {
    const stack = [start];
    const visited = {};
    const result = [];
    visited[start] = true;
    let currVertex;
    while (stack.length) {
      currVertex = stack.pop();
      result.push(currVertex);
      this.adjacencyList[currVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          stack.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }
    return result;
  }

  // 1. Start
  // 2. Visit first then second neighbor
  // 3. Visit first neighbor's all neighbors (only to one level)
  // 4. Visit seconds neighbor's all neighbors
  // 5. Repeat
  breadthFirstSearch(start) {
    const queue = [start];
    const visited = {};
    const result = [];
    visited[start] = true;
    let currVertex;
    while (queue.length) {
      currVertex = queue.shift();
      result.push(currVertex);
      this.adjacencyList[currVertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }
    return result;
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
// graph.removeVertex("v1");
console.log(graph.depthFirstRec("v1"));
// console.log(graph.depthFirstIterate("v2"));
console.log(graph.breadthFirstSearch("v1"));
console.log(graph);
