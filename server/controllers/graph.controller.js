const graph = require("../classes/graph");
const httpStatus = require("http-status");
const getGraph = async (req, res) => {};
const addNode = async (req, res) => {
  const { nodeValue } = req.body;
  graph.addNode(nodeValue);
  res.status(httpStatus.CREATED).send();
};

const addEdge = async (req, res) => {
  const { src, dest } = req.body;
  try {
    graph.addEdge(parseInt(src), parseInt(dest));
    res.status(httpStatus.CREATED).send();
  } catch {
    res.status(httpStatus.BAD_REQUEST).send();
  }
};
const printGraph = async (req, res) => {
  graph.printGraph();
  res.status(httpStatus.NO_CONTENT).send();
};
const deleteGraph = async (req, res) => {
  graph.deleteGraph();
  res.status(httpStatus.NO_CONTENT).send();
};
const getNeighboring = async (req, res) => {
  const { val } = req.query;
  const values = graph.getNeighboring();
  res.status(200).send(values);
};
module.exports = {
  addNode,
  addEdge,
  printGraph,
  deleteGraph,
  getNeighboring,
};
