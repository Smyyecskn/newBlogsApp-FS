const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

require("express-async-errors");
app.use(express.json());
// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

app.get("/", (req, res) => {
  res.send({
    error: false,
    message: "WELCOME TO THE BLOG APP",
    user: req.user,
  });
});
//middleware/getModelList
app.use(require("./src/middlewares/queryHandler.js"));

//middleware/authentication
// app.use(require("./src/middlewares/authentication.js"));
app.use("/", require("./src/routes"));

app.use(require("./src/middlewares/errorHandler.js"));

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`));
