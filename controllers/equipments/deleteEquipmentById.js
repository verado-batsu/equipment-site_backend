const { Equipment } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteEquipmentById = async (req, res) => {
	// const { _id: ownerId } = req.user;
	const { equipmentId } = req.params;
	
	// const equipment = await Equipment.findById(equipmentId);
	// if (!equipment) {
	// 	throw HttpError(404);
	// }
	// if (String(equipment.ownerId) !== String(ownerId)) {
	// 	throw HttpError(403, `Equipment doesn't belong to this account`);
	// }

	const deletedEquipment = await Equipment.findByIdAndDelete(equipmentId)
	if (!deletedEquipment) {
		throw HttpError(404);
	}
	
	res.json({ message: 'equipment deleted' });
}

module.exports = deleteEquipmentById;