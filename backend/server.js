const express = require("express");
const cors = require("cors");
const app = express();
var config = require("./config/default.json");

const port = config.server.port;

app.use(cors());

var productControllers = require(__dirname + "/app/controllers/product");
app.use(productControllers);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
