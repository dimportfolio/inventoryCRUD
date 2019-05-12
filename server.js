//Creates an Express application
const express = require("express");
const app = express();
//Parses HTTP request body
const bodyParser = require("body-parser");
//Parses application/json
app.use(bodyParser.json());
//Configuring CORS
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

const db = require("./app/config/db.config");

db.sequelize.sync({force: true}).then(() => {
  console.log("Drop and Resync with {force: true}");
});

require("./app/route/inventory.route")(app);

//Create Server
const server = app.listen(8080, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`App listening at http://${host}:${port}`)
});