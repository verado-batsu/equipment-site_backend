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
const { isValidId, authenticate, upload } = require('../../middlewares');

const router = express.Router()

router.get("/", getAllEquipments)

router.get("/:equipmentId", isValidId, getEquipmentById)

router.post('/', authenticate, upload.array("photos", 8), validateBody(equipmentAddSchema), addNewEquipment)

router.put('/:equipmentId', authenticate, isValidId, upload.array("photos", 8), validateBody(equipmentAddSchema), updateEquipmentbyId)

router.delete('/:equipmentId', authenticate, isValidId, deleteEquipmentById)

module.exports = router;