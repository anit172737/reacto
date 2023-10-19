const connect = require("./dbConfig/dbConfig");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users/userRoutes");
const app = express();
// const bcryptjs = require("bcryptjs");
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connect();

app.use("/api", userRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
