const express = require("express");
const app = express();

const dotenv = require("dotenv");
const routes = require("./routes/userRoutes");

dotenv.config();
app.use(express.json());

app.use("/clients", routes);

app.listen(8080, () => {
  console.log("Server running at 8080");
});
