const {
	ctrlWrapper
} = require('../../decorators');

// const getAllEquipments = require("./getAllEquipments");
const login = require("./login");
const signup = require("./signup");
// const deleteEquipmentById = require("./deleteEquipmentById");
// const updateEquipmentbyId = require("./updateEquipmentbyId");

module.exports = {
	// getAllEquipments: ctrlWrapper(getAllEquipments),
	// getEquipmentById: ctrlWrapper(getEquipmentById),
	signup: ctrlWrapper(signup),
	login: ctrlWrapper(login),
	// updateEquipmentbyId: ctrlWrapper(updateEquipmentbyId),
}