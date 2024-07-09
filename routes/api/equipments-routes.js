const express = require('express')

const equipmetsController = require("../../controllers/equipments");
const { equipmentAddSchema } = require('../../schemas/equipments');
const { validateBody } = require("../../decorators");
const { isValidId } = require('../../middlewares');

const router = express.Router()

router.get("/", equipmetsController.getAllEquipments)

router.get("/:equipmentId", isValidId, equipmetsController.getEquipmentById)

router.post('/', validateBody(equipmentAddSchema),equipmetsController.addNewEquipment)

module.exports = router;