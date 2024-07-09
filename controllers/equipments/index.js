const {
	ctrlWrapper
} = require('../../decorators');

const getAllEquipments = require("./getAllEquipments");
const getEquipmentById = require("./getEquipmentById");
const addNewEquipment = require("./addNewEquipment");
// const deleteContactById = require("./deleteContactById");
// const updateContactbyId = require("./updateContactbyId");
// const updateStatusContact = require("./updateStatusContact");

module.exports = {
	getAllEquipments: ctrlWrapper(getAllEquipments),
	getEquipmentById: ctrlWrapper(getEquipmentById),
	addNewEquipment: ctrlWrapper(addNewEquipment),
	// deleteContactById: ctrlWrapper(deleteContactById),
	// updateContactbyId: ctrlWrapper(updateContactbyId),
	// updateStatusContact: ctrlWrapper(updateStatusContact)
}