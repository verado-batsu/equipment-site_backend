const express = require('express')
const cors = require("cors")

// "start": "cross-env NODE_ENV=production node ./server.js",
// "start:dev": "cross-env NODE_ENV=development nodemon ./server.js",

const equipmentsRouter = require("./routes/api/equipments-routes")

const app = express();

app.use(cors());

app.use("/api/equipments", equipmentsRouter)

module.exports = app