const config = require("config");
const jwt = require("jsonwebtoken");

const auth = (request, response, next) => {
  console.log(request.headers.authorization);
  const token = request.headers.authorization.split(" ")[1];

  if (!token) {
    return response.status(401).json({ message: "You are not authorized" });
  }

  try {
    console.log(token);
    const decodedToken = jwt.verify(token, config.get("jwtSecret"));
    request.user = decodedToken;
    next();
  } catch (e) {
    console.log(e.message);
    response.status(401).json({ message: "You are not authorized" });
  }
};

module.exports = auth;
