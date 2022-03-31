const { MongoClient, ServerApiVersion } = require("mongodb");

const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

const PORT = config.get("port") || 5000;
const URI = config.get("mongoUri");

const { Note } = require("./models/Note");

app.use(express.json({ extended: true }));

const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors());

start();

async function start() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });
    app.listen(PORT, () => console.log(`Connected to server at ${PORT}`));
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
}

app.use("/api/auth", require("./routes/auth.routes"));

app.use("/api/note", require("./routes/note.routes"));

//app.use("/api/user", require("./routes/user.routes"));

module.exports = { app };
