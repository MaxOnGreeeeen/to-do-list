const { Router, response } = require("express");
const { check, validationResult } = require("express-validator");

const config = require("config");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth.middleware");

//getUser data
router.get("/get", async (response, request) => {
  try {
  } catch (e) {
    console.log(e.message);
  }
});
