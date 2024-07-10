const express = require('express')

const {
	getAllEquipments,
	getEquipmentById,
	addNewEquipment,
	updateEquipmentbyId,
	deleteEquipmentById
} = require("../../controllers/equipments");
const { equipmentAddSchema } = require('../../schemas/equipments');
const { validateBody } = require("../../decorators");
const { isValidId } = require('../../middlewares');

const router = express.Router()

router.get("/", getAllEquipments)

router.get("/:equipmentId", isValidId, getEquipmentById)

router.post('/', validateBody(equipmentAddSchema), addNewEquipment)

router.put('/:equipmentId', isValidId, validateBody(equipmentAddSchema), updateEquipmentbyId)

router.delete('/:equipmentId', isValidId, deleteEquipmentById)

module.exports = router;