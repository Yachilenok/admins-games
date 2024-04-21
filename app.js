const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const cors = require("./middlewares/cors");
const mainRoute = require("./routes/main");
const gamesRouter = require("./routes/game");

const PORT = 3000;
const app = express();

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  mainRoute,
  gamesRouter
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
