const { Equipment } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteEquipmentById = async (req, res) => {
	const { equipmentId } = req.params;
	const deletedEquipment = await Equipment.findByIdAndDelete(equipmentId)
	if (!deletedEquipment) {
		throw HttpError(404);
	}
	res.json({ message: 'equipment deleted' });
}

module.exports = deleteEquipmentById;