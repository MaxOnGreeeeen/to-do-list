const config = require("config");
const jwt = require("jsonwebtoken");

const auth = (request, response, next) => {
  const token = request.header("x-auth-token");

  if (!token)
    return response.status(401).json({ message: "You are not authorized" });

  try {
    const decodedToken = jwt.verify(token, config.get("jwtSecret"));

    request.user = decodedToken;
    next();
  } catch (e) {
    response.status(401).json({ message: "You are not authorized" });
  }
};

module.exports = auth;
