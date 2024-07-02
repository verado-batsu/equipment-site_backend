const express = require('express')
const cors = require("cors")
require('dotenv').config()

const equipmentsRouter = require("./routes/api/equipments-routes")

const app = express();

app.use(cors());

app.use("/api/equipments", equipmentsRouter)

module.exports = app