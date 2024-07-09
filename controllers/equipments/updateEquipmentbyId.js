const { Equipment } = require("../../models");
const { HttpError } = require("../../helpers");

const updateEquipmentbyId = async (req, res) => {
	const { equipmentId } = req.params;
	const updatedContact = await Equipment.findByIdAndUpdate(equipmentId, req.body, {new: true})
	if (!updatedContact) {
		throw HttpError(404);
	}
	res.json(updatedContact)
}

module.exports = updateEquipmentbyId;