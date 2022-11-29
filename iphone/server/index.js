const express = require("express");
const cors = require("cors");

const app = express();

var Products = require("./Products")

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to over online shop API...");
});

app.get("/Products", (req, res) => {
  res.send(Products);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log("Server running on port ${port}"));
