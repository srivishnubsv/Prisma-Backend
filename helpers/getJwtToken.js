const jwt = require("jsonwebtoken");
const jwtToken = (user) => {
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1 Day",
  });
};

module.exports = jwtToken;
