// app.js
const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const path = require("node:path");


app.use("/authors", authorRouter);

//ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
