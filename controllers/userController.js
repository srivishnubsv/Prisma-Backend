const prisma = require("./../prisma/index");
const cookieToken = require("./../utils/cookieToken");

exports.signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error("All Fields Required");
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    cookieToken(user, res);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("All Fields Required");
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Invalid Credentials");
    }

    if (user.password !== password) {
      throw new Error("Invalid Credentials");
    }

    cookieToken(user, res);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.signOut = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "Logged Out Successfully",
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
