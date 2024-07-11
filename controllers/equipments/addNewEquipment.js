const { Equipment } = require("../../models");

const addNewEquipment = async (req, res) => {
	const { _id: ownerId, name: ownerName } = req.user;
	const addedEquipment = await Equipment.create({ ...req.body, ownerId, ownerName });
	res.status(201).json(addedEquipment);
}

module.exports = addNewEquipment;