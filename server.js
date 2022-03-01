const { MongoClient, ServerApiVersion } = require("mongodb");

const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

const PORT = config.get("port") || 5000;
const URI = config.get("mongoUri");

app.use(express.json({ extended: true }));

const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors()); // Use this after the variable declaration

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
