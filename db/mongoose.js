const mongoose = require("mongoose");
var url =
  "mongodb+srv://khizernajeeb:2104468%23kK@cluster0.mdydikm.mongodb.net/task-manager-api";

mongoose.connect(url, {
  useNewUrlParser: true,
});
