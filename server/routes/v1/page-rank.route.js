const express = require("express");
const pageRankController = require("../../controllers/pageRank.controller");

const router = express.Router();

router.get("/", pageRankController.getPageRank);
module.exports = router;
