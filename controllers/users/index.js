const {
	ctrlWrapper
} = require('../../decorators');

// const getAllEquipments = require("./getAllEquipments");
// const getEquipmentById = require("./getEquipmentById");
const signup = require("./signup");
// const deleteEquipmentById = require("./deleteEquipmentById");
// const updateEquipmentbyId = require("./updateEquipmentbyId");

module.exports = {
	// getAllEquipments: ctrlWrapper(getAllEquipments),
	// getEquipmentById: ctrlWrapper(getEquipmentById),
	signup: ctrlWrapper(signup),
	// deleteEquipmentById: ctrlWrapper(deleteEquipmentById),
	// updateEquipmentbyId: ctrlWrapper(updateEquipmentbyId),
}