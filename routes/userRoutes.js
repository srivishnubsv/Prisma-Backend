const express = require("express");
const { signIn, signUp, signOut } = require("../controllers/userController");

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);
router.route("/signout").get(signOut);
module.exports = router;
