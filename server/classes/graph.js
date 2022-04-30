class Graph {
  //Class constructor
  //Using adjacency list to model the graph
  #adjacencyList;
  constructor() {
    this.numberOfNodes = 0;
    this.#adjacencyList = new Map();
  }

  //add nodes(vertices) with a given name
  addNode(nodeName) {
    this.#adjacencyList.set(nodeName, []);
  }

  checkNodeExists(name) {
    return this.#adjacencyList.get(name) ? true : false;
  }
  // add edge to the graph
  addEdge(src, dest) {
    // get the list for vertex src and put the
    // vertex dest denoting edge between src and dest
    if (this.checkNodeExists(src) && this.checkNodeExists(dest)) {
      this.#adjacencyList.get(src).push(dest);

      // Since graph is undirected,
      // add an edge from dest to src also
      this.#adjacencyList.get(dest).push(src);
    } else {
      throw new Error("Nodes Must Exist");
    }
    this.printGraph();
  }
  printGraph() {
    // get all the vertices
    const get_keys = this.#adjacencyList.keys();
    // iterate over the vertices(object)
    for (let i of get_keys) {
      //get values of list i
      const get_values = this.#adjacencyList.get(i);
      let conc = "";

      // iterate over the adjacency list
      for (let j of get_values) conc += j + " ";

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc);
    }
  }
  convert() {
    // need improvement
    // Initialize a 2d matrix
    let matrix = Array.from(Array(this.#adjacencyList.size), () =>
      Array(this.#adjacencyList.size).fill(0)
    );
    for (let i = 0; i < this.#adjacencyList.size; i++) {
      for (let j of this.#adjacencyList.get(i)) matrix[i][j] = 1;
    }
    return matrix;
  }
  getNeighboring(node) {
    //get value of particular node in adjacency list
    const nodeValues = this.#adjacencyList.get(node);
    return nodeValues;
  }
  deleteGraph() {
    this.#adjacencyList = new Map();
  }
}
const graph = new Graph();
module.exports = graph;
