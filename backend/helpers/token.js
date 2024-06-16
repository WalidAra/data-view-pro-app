const jwt = require("jsonwebtoken");

const createToken = (id, recall) => {
  const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: recall ? "1d" : "10m",
  });
  return token;
};

module.exports = createToken;
