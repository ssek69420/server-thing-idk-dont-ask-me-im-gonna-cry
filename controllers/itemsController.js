// i'll only list the items for now
const express = require("express");
const itemsList = express.Router();
const itemsForListing = require("../routes/items");

itemsList.get("/items", (req, res) => {
  res.send(itemsForListing);
});

module.exports = itemsList;
