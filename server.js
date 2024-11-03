const express = require("express");
const project = express();
const port = 8200; // port 3000 listed as already used and connection ended?
// idfk im too tired for this shit
// maybe its because of the SQL database that held
// the same port, but im not sure
// either way, fix it, im gonna sleep 🤘
// ---- i fixed it

const message = "Server is running on port http://localhost:"; // im terribly mentally scarred

const itemsController = require("./controllers/itemsController"); // array thingy controller
// which is also the list
// don't ask me (even though i programmed it)
project.use((req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.hostname, req.path, req.time);
  next();
}); // this shouldn't have given me this much of a headache
    // literally just needed to move it up the chain, for it to log every page



project.get("/", (req, res) => {
  res.send("cmon, do something");
});

project.get("/items", itemsController);

project.listen(port, () => {
  console.log(`${message}${port}`); // looks cursed, i love it
});


// remember to remove comments!
// you'll prob forget tho
// im so tireedddddddddddddddddddddddd 🛌🛌🛌🛌🛌🛌
