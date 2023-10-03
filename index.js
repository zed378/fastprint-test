const express = require("express");
require("dotenv").config();
const cors = require("cors");
const router = require("./src/routes/");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", router);
app.use("/", (req, res) => {
  res.send("My API");
});

const port = process.env.PORT;
app.listen(port, () => console.debug(`Server running on port: ${port}`));
