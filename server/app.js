const express = require("express"),
  path = require("path"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  routes = require("./routes/v1"),
  pageRank = require("./classes/pageRank"),
  config = require("./config/config"),
  graph = require("./classes/graph");

const isProduction = process.env.NODE_ENV === "production";

// Create global app object
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
// Normal express config defaults
app.use(require("morgan")("dev"));

// prefix routes with v1
app.use("/v1", routes);

const server = app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port " + server.address().port);
  //graph.addNode(0);
  //graph.addNode(1);
  // graph.addNode(2);
  // graph.addNode(3);
  //graph.addEdge(0, 1);
  // graph.addEdge(1, 0);
  // graph.addEdge(2, 3);
  // graph.addEdge(3, 0);
  // graph.addEdge(1, 3);
  // graph.addEdge(3, 2);
  // graph.addEdge(3, 4);
  // graph.addEdge(4, 0);
  // graph.addEdge(4, 1);
  // graph.addEdge(4, 2);
  // graph.addEdge(4, 3);

  // graph.addEdge(1, 0);
  // graph.addEdge(2, 1);
  // graph.addEdge(2, 3);
  // graph.addEdge(3, 2);
  // graph.addEdge(3, 4);
  // graph.addEdge(4, 0);
  // graph.addEdge(4, 1);
  // graph.addEdge(4, 2);
  // graph.addEdge(4, 3);

  // graph.printGraph();
  // console.log(graph.getNeighboring(2));
  //console.log(graph.convert());
  //console.log(new pageRank(graph.convert()).calculatePageRankValues());
});

module.exports = server;
