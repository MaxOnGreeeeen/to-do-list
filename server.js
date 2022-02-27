const { MongoClient, ServerApiVersion } = require("mongodb");

const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

const PORT = config.get("port") || 5000;
const URI = config.get("mongoUri");

async function start() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });
    app.listen(PORT, () => console.log("Жека пидрильник " + PORT));
  } catch (e) {
    console.log(e.getMessage);
    process.exit(1);
  }
}
app.use("/hello", (req, res) => {
  res.send("МАКС ГОВНОЕД, Я ПРИДУМАЛ КРУЧЕ!!!");
});

start();

app.use("/api/auth", require("./routes/auth.routes"));
