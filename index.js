require("./db/mongoose");

const express = require("express");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.send("hello world");
});

app.post("/signup", async (req, res) => {
  try {
    let user1 = await User.findOne({ email: req.body.email });
    if (user1) return res.status(400).send("User already registered.");

    const user = new User(req.body);

    await user.save();
    const token = await user.generateAuthToken();

    res.send({ token, user });
  } catch (error) {
    res.send(error || "Error");
  }
});

app.listen(process.env.PORT || 3000);
