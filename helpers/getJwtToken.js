const jwt = require("jsonwebtoken");
const jwtToken = (user) => {
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
  return token;
};

// Export the function for use in other files

module.exports = jwtToken;
