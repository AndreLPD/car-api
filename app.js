const express = require("express");
app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./src/routes");
require("dotenv").config();

const CarController = require("./src/controllers/cars.js");

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_ATLAS,{ useNewUrlParser:true, useUnifiedTopology:true })

app.use("/api", routes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Api on`);
});