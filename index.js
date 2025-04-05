const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const app = express();
const userRouter = require("./routes/userRoutes");

dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
