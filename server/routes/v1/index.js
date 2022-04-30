const express = require("express");
const graphRoute = require("./graph.route");
const docsRoute = require("./routes.docs");
const config = require("../../config/config");
const pageRankRoute = require("./page-rank.route");
const router = express.Router();
//default routes array
const defaultRoutes = [
  {
    path: "/graph",
    route: graphRoute,
  },
  {
    path: "/page-rank",
    route: pageRankRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: "/docs",
    route: docsRoute,
  },
];
if (config.env === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
