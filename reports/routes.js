const router = require("express").Router();
const db = require("../data/dbConfig");

router.get("/", (req, res) => {
  // get all records
});

router.get("/us", (req, res) => {
  // get top 5 states in the US that have the most confirmed cases
});
module.exports = router;
