const app = require("express")();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//delecration des routes
const userRoute = require("./api/routes/user.routes");
const postRoute = require("./api/routes/posts.routes");
const clientRoutes = require("./api/routes/client.details.routes");
const freeRoutes = require("./api/routes/free.details.routes");

app.use("/user", userRoute);
app.use("/post", postRoute);
app.use("/client", clientRoutes);
app.use("/free", freeRoutes);
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));
mongoose
  .connect("mongodb://127.0.0.1:27017/monpfe", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to database...");
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
