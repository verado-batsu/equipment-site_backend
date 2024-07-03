const express = require('express')

const equipmetsController = require("../../controllers/equipments")

const schemas = require('../../schemas/equipmets')

const { validateBody } = require("../../decorators");

const router = express.Router()

router.get("/", equipmetsController.getAllEquipments)

// router.get("/:id", )

module.exports = router;