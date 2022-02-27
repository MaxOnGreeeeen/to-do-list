const { Schema, model } = require("mongoose");

//создание модели пользователя
const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = model("User", schema);
