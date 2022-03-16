const { Router } = require("express");
const config = require("config");
const Note = require("../models/Note");
const router = Router();

//api/note

//post create note
// /create
router.post(
  "/create",

  async (request, response) => {
    try {
      const { title, description } = request.body;
      console.log(`title = ${title}; description = ${description};`);
      if (!title || !description) {
        return response
          .status(400)
          .json({ message: "Заполните все необходимые поля" });
      }

      //создание нового пользователя
      const note = new Note({
        title,
        description,
      });

      await note.save().then(
        (doc) => {
          response.json(doc);
        },
        (e) => {
          response.json(e);
          response.status(500).json({ message: "Something went wrong..." });
        }
      );
    } catch (e) {
      response.status(500).json({ message: "Something went wrong..." });
    }
  }
);

module.exports = router;
