const { Equipment } = require("../../models");

const addNewEquipment = async (req, res) => {
	const { _id: owner} = req.user;
	const addedEquipment = (await Equipment.create({ ...req.body, owner}));
	res.status(201).json(addedEquipment);
}

module.exports = addNewEquipment;