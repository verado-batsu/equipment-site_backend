const { Equipment } = require("../../models");

const getAllEquipments = async (req, res) => {
	// const { _id: owner } = req.user;
	// const { page = 1, limit = 10, ...query } = req.query;
	// const skip = (page - 1) * limit;
	// const equipments = await Equipment.find({ owner, ...query }, '', { skip, limit });
	const equipments = await Equipment.find();
	res.json(equipments);
}

module.exports = getAllEquipments;