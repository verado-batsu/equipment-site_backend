const {
	ctrlWrapper
} = require('../../decorators');

const getAllEquipments = require("./getAllEquipments");
const getEquipmentById = require("./getEquipmentById");
const addNewEquipment = require("./addNewEquipment");
const deleteEquipmentById = require("./deleteEquipmentById");
const updateEquipmentbyId = require("./updateEquipmentbyId");

module.exports = {
	getAllEquipments: ctrlWrapper(getAllEquipments),
	getEquipmentById: ctrlWrapper(getEquipmentById),
	addNewEquipment: ctrlWrapper(addNewEquipment),
	deleteEquipmentById: ctrlWrapper(deleteEquipmentById),
	updateEquipmentbyId: ctrlWrapper(updateEquipmentbyId),
}