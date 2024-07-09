const express = require('express')

const equipmentsController = require("../../controllers/equipments");
const { equipmentAddSchema } = require('../../schemas/equipments');
const { validateBody } = require("../../decorators");
const { isValidId } = require('../../middlewares');

const router = express.Router()

router.get("/", equipmentsController.getAllEquipments)

router.get("/:equipmentId", isValidId, equipmentsController.getEquipmentById)

router.post('/', validateBody(equipmentAddSchema), equipmentsController.addNewEquipment)

router.put('/:equipmentId', isValidId, validateBody(equipmentAddSchema), equipmentsController.updateEquipmentbyId)

router.delete('/:equipmentId', isValidId, equipmentsController.deleteEquipmentById)

module.exports = router;