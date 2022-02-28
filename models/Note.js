const { Schema, model } = require("mongoose");

//создание модели заметки
const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
  deadline: {
    type: Date,
    required: true,
  },
  importance: {
    type: String,
    default: "0",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Task", noteSchema);
