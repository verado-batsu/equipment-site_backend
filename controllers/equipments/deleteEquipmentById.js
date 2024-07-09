const { Equipment } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteEquipmentById = async (req, res) => {
	const { contactId } = req.params;
	const deletedContact = await Equipment.findByIdAndDelete(contactId)
	if (!deletedContact) {
		throw HttpError(404);
	}
	res.json({ message: 'contact deleted' });
}

module.exports = deleteEquipmentById;