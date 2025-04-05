const prisma = require("./../prisma/index");
const cookieToken = require("./../utils/cookieToken");

const signUp = async (req, res) => {
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
module.exports = signUp;
