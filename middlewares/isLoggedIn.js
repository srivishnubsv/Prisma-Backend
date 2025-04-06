const prisma = require("../prisma/index");

const jwt = require("jsonwebtoken");

exports.isLoggedIn = async (req, res, next) => {
  const token = req.cookies.token;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded) {
    return res
      .status(401)
      .json({ message: "Unauthorized, please login first" });
  }

  req.user = await prisma.user.findUnique({
    where: {
      id: decoded.userId,
    },
  });

  next();
};
