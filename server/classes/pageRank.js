const matrix = require("./matrix");
class PageRank {
  //private variable iterations
  #iterations;

  constructor(graph) {
    this.graph = graph;
    this.matrix = matrix;
    this.alpha = 0.01;
    this.pageRankValues = [];
    this.#iterations = 10;
  }

  calculatePageRankValues() {
    const normalizedGraph = this.turnIntoNormalizedGraph();
    const transitionMatrix = this.turnIntoTransitionMatrix(normalizedGraph);
    let equalProbabilityMatrix;
    equalProbabilityMatrix = Array.from(Array(this.graph[0].length), () =>
      Array(1).fill(1 / this.graph[0].length)
    );
    // multiplying EqualProbabilityMatrix with TransitionMatrix
    const transitionIterations = this.matrix.getPowerOfMatrix(
      transitionMatrix,
      this.#iterations
    );

    const result = this.matrix.multiplyMatrices(
      transitionIterations,
      equalProbabilityMatrix
    );
    return result;
  }

  turnIntoNormalizedGraph() {
    let transposedGraph = this.matrix.transposeAMatrix(this.graph);
    //count number of 1 in a row.
    //array to maintain 1s in each row so to  calculate divide factor,
    let vertexOnes = [];
    transposedGraph.forEach((element) => {
      let count = 0;
      element.forEach((item) => (item === 1 ? count++ : null));
      vertexOnes.push(count);
    });
    let normalizedGraph = transposedGraph.map((element, index) => {
      return element.map((item) =>
        item / vertexOnes[index] ? item / vertexOnes[index] : 0
      );
    });


    //undo the transpose

    transposedGraph = this.matrix.transposeAMatrix(normalizedGraph);
    return transposedGraph;
  }
  turnIntoTransitionMatrix(transposedGraph) {
    // (1-alpha) normalized MATRIX + alpha/n;
    const multiplicationFactor = 1 - this.alpha;
    const addedFactor = this.alpha / transposedGraph[0].length;
    let matrixAfterMultiplyingFactor = this.matrix.scalarProductMat(
      transposedGraph,
      multiplicationFactor
    );

  
    let transitionProbabilityMatrix = this.matrix.addScalarValue(
      matrixAfterMultiplyingFactor,
      addedFactor
    );
    return transitionProbabilityMatrix;
  }
}

module.exports = PageRank;
