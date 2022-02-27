const { Router } = require("express");
const { check, validationResult } = require("express-validator");

const config = require("config");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = Router();
const jwt = require("jsonwebtoken");

// /api/auth
router.post(
  "/register",
  [
    check("email", "Некорректный email").isEmail(),
    check("password", "Длина пароля не соответствует").isLength({ min: 6 }),
  ],

  async (request, response) => {
    try {
      const errors = validationResult(request);

      if (!errors.isEmpty()) {
        return response.status(400).json({
          errors: errors.array(),
          message: "Your password is not long enough",
        });
      }
      const { email, password } = request.body;

      const unChecked = await User.findOne({ email });

      if (unChecked) {
        return response.status(400).json({
          message: "User with this email has already been registered",
        });
      }
      //кодируем пароль
      const hashedPassword = await bcrypt.hash(password, 12);
      //создание нового пользователя
      const User = new User({ email, password: hashedPassword });

      await user.save();

      response.status(201).json({ message: "User has been created" });
    } catch (e) {
      response.status(500).json({ message: "Something went wrong..." });
    }
  }
);

router.post(
  "/login",
  [
    check("email", "Некорректный email").normalizeEmail().isEmail(),
    check("password", "Введите пароль").exists(),
  ],
  async (request, response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(400).json({
        errors: errors.array(),
        message: "Something got wrong while authorisation",
      });
    }

    const { email, password } = request.body;

    const user = await User.findOne({ email });

    if (!user) {
      return response.status(400).json({ message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return response
        .status(400)
        .json({ message: "Password is wrong, try again" });
    }

    const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
      expiresIn: "1h",
    });

    response.json({ token, userId: user.id });
  }
);
module.exports = router;
