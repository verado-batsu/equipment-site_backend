const {
	ctrlWrapper
} = require('../../decorators');

const getAllEquipments = require("./getAllEquipments");
// const getOneContactById = require("./getOneContactById");
// const addNewContact = require("./addNewContact");
// const deleteContactById = require("./deleteContactById");
// const updateContactbyId = require("./updateContactbyId");
// const updateStatusContact = require("./updateStatusContact");

module.exports = {
	getAllEquipments: ctrlWrapper(getAllEquipments),
	// getOneContactById: ctrlWrapper(getOneContactById),
	// addNewContact: ctrlWrapper(addNewContact),
	// deleteContactById: ctrlWrapper(deleteContactById),
	// updateContactbyId: ctrlWrapper(updateContactbyId),
	// updateStatusContact: ctrlWrapper(updateStatusContact)
}