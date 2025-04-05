const jwtToken = require("../helpers/getJwtToken");

const cookieToken = (user, res) => {
  const token = jwtToken(user);
  const options = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  user.password = undefined; // Remove password from user object
  res.status(200).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
};

module.exports = cookieToken;
