const { Equipment } = require("../../models");
const { HttpError } = require("../../helpers");

const updateEquipmentbyId = async (req, res) => {
	const { _id: owner } = req.user;
	const { equipmentId } = req.params;
	
	// const equipment = await Equipment.findById(equipmentId);
	// if (!equipment) {
	// 	throw HttpError(404);
	// }
	// if (String(equipment.ownerId) !== String(ownerId)) {
	// 	throw HttpError(403, `Equipment doesn't belong to this account`);
	// }

	const updatedContact = await Equipment.findByIdAndUpdate(equipmentId, {...req.body, owner}, { new: true })
	if (!updatedContact) {
		throw HttpError(404);
	}
	
	res.json(updatedContact)
}

module.exports = updateEquipmentbyId;