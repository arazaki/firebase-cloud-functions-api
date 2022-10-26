const express = require("express");
const v1EventRouter = require("./v1/routes/eventRoutes");
const authenticate = require("./middlewares/authenticate");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors({ origin: true }));

app.use(bodyParser.json());

app.use(authenticate);

app.use("/v1/events", v1EventRouter);

module.exports = app;
