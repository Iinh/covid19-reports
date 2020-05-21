require("dotenv").config();

const express = require("express");
const server = express();

const reportRouter = require("./reports/routes");
server.use(express.json());

server.use("/reports", reportRouter);

server.get("/", (req, res) => {
  res.status(200).send(`<h1>Covid-19 Reports</h1>`);
});

const port = process.env.PORT || 1313;

server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));
