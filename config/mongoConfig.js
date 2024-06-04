const mongoose = require("mongoose");

let mongoConfig = () => {
  mongoose
    .connect(
      "mongodb+srv://crud-app:y6c3xThy9HICrVR4@cluster0.44gbgr0.mongodb.net/crud-xm?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("Database Connected!"));
};

module.exports = mongoConfig;

//mongodb+srv://crud-app:y6c3xThy9HICrVR4@cluster0.44gbgr0.mongodb.net/crud-xm?retryWrites=true&w=majority&appName=Cluster0
