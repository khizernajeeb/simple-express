const express = require("express");
const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.send("hello world");
});

app.listen(process.env.PORT || 3000);
