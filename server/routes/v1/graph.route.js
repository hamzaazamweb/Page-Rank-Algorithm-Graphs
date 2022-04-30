const graphController = require("../../controllers/graph.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     Graph:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */

const express = require("express");

const router = express.Router();

router.get("/",graphController.printGraph)
router.delete("/",graphController.deleteGraph)
router.post("/node", graphController.addNode);
router.get("/nodes-neighbor",graphController.getNeighboring)
router.post("/edge",graphController.addEdge);
module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Graph
 *   description: Apis For Graph Functionality
 */
/**
 * @swagger
 * /:
 *   get:
 *     summary: ss
 *     tags: [Graph]
 *
 *
 *     responses:
 *       "201":
 *         description: Got
 *
 */
