const express = require("express");
const cors = require("cors");
const { scrapeLogic } = require("./scrapeLogic");
const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;

app.get("/scrape", (req, res) => {
  scrapeLogic(res);
});

app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
