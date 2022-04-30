const pageRank = require("../classes/pageRank");
const graph = require("../classes/graph");
const httpStatus = require("http-status");

const getPageRank = async (req, res) => {
  const { val } = req.query;
  const pageRankMatrix = new pageRank(
    graph.convert()
  ).calculatePageRankValues();
  const rankValue = pageRankMatrix[val];
  

  res.status(200).send(rankValue);
};

module.exports = {
  getPageRank,
};
