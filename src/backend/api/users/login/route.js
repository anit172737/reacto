const connect = require("../../../dbConfig/dbConfig");
const User = require("../../../models/userModel");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
// const bcryptjs = require("bcryptjs");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connect();

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // const reqBody = await request.json();
    // const { email, password } = reqBody;

    //check user is exist or not
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User not exist" }, { status: 400 });
    }

    //check password is valid or not

    if (password !== user.password) {
      return res.json({ error: "Invalid password" }, { status: 400 });
    }

    const userData = {
      id: user._id,
      email: user.email,
    };

    //create token
    const token = await jwt.sign(userData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const response = res.json({
      message: "Login successful",
      success: true,
      token: token,
      userData: userData,
    });

    // response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error) {
    return res.json({ error: error.message }, { status: 500 });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
