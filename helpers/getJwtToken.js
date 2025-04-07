const jwt = require("jsonwebtoken");

const getJwtToken = (user) => {
  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d", // shorter format is fine too
  });
};

module.exports = getJwtToken;
