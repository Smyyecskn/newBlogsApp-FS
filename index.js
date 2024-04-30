const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

require("express-async-errors");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("WELCOME TO THE BLOG APP");
});
//middleware/getModelList
app.use(require("./src/middlewares/queryHandler.js"))


app.use(require("./src/middlewares/errorHandler.js"));

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`));
