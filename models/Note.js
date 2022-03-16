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
    required: false,
  },
  importance: {
    type: String,
    default: "0",
  },
  completed: {
    type: Boolean,
    default: false,
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
});

module.exports = model("Note", noteSchema);
