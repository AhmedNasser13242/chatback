const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://ahmednasser1313:qewret1324@cluster0.p1k8mcc.mongodb.net/Cluster0?retryWrites=true&w=majority`,
  () => {
    console.log("connected to mongodb");
  }
);
