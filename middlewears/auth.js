const User = require("../models/user");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    console.log("auth");
    const token = req.header("Authorization").replace("Bearer ", "");

    const decoded = jwt.verify(token, "thisistoken");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;

    next();
  } catch (error) {
    res.status(401).send({ error: "Unauthorized" });
  }
};

module.exports = auth;
