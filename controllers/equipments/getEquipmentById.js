const { Equipment } = require("../../models");
const { HttpError } = require("../../helpers");

const getEquipmentById = async (req, res) => {
	const { equipmentId } = req.params;
	const equipment = await Equipment.findById(equipmentId);
	if (!equipment) {
		throw HttpError(404, `Equipment with ${equipmentId} not found`);
	}
	res.json(equipment)
}

module.exports = getEquipmentById;