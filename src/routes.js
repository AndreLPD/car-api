const express = require("express");
const routes = express.Router();
const car = require("./controllers/cars");

routes.post("/car", car.store);
routes.get("/cars", car.index);
routes.get("/cars/:page", car.index);
routes.get("/car/:id", car.show);
routes.put("/car/update/:id", car.update);
routes.delete("/car/delete/:id", car.delete);

module.exports =  routes;