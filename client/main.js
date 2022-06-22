const axios = require("axios");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());

app.get("/", async (req, res) => {
  let result = {};
  try {
    await axios.get("http://localhost:8080/clients/getClients").then((resp) => {
      result = resp.data;
    });
    res.render("ListClients", { result });
  } catch (e) {
    console.log(e);
  }
});

app.get("/total", async (req, res) => {
  try {
    let obj = [{}];
    await axios
      .get("http://localhost:8080/clients/totalClients")
      .then((resp) => {
        obj = resp.data;
      });
    res.render("TotalClients", { obj });
  } catch (e) {
    console.log(e);
  }
});

app.get("/searchById", (req, res) => {
  res.render("SearchClientById");
});

app.post("/searchById", async (req, res) => {
  const { id } = req.body;
  let result = [{}];

  try {
    await axios
      .get(`http://localhost:8080/clients/clientById/${id}`)
      .then((resp) => {
        result = resp.data;
      });
    res.render("ListClients", { result });
  } catch (e) {
    console.log(e);
  }
});

app.get("/searchByName", (req, res) => {
  res.render("SearchClientByName");
});

app.post("/searchByName", async (req, res) => {
  const { name } = req.body;
  let result = [{}];
  try {
    await axios
      .get(`http://localhost:8080/clients/clientByName/${name}`)
      .then((resp) => {
        result = resp.data;
      });
    res.render("ListClients", { result });
  } catch (e) {
    console.log(e);
  }
});

app.get("/saveClient", (req, res) => {
  res.render("SaveClient");
});

app.post("/saveClient", async (req, res) => {
  const client = req.body;
  try {
    axios
      .post("http://localhost:8080/clients", { client })
      .then(function (response) {
        console.log(response);
      });
    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
});
app.get("/delete", (req, res) => {
  res.render("DeleteClient");
});

app.delete("/removeClient", async (req, res) => {
  const { id } = req.body;
  try {
    await axios.delete(`http://localhost:8080/clients/${id}`);
    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
});

app.listen(3000, () => {
  console.log("Running at 3000");
});
