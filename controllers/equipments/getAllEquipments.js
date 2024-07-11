const { Equipment } = require("../../models");

const getAllEquipments = async (req, res) => {
	// const { _id: owner } = req.user;
	const { page = 1, limit = 10 } = req.query;
	const skip = (page - 1) * limit;
	const equipments = await Equipment.find({}, "", { skip, limit }).populate("owner", "name");
	
	// const total = await Equipment.where({}).countDocuments();
	// console.log(total)

	res.json(equipments);
}

module.exports = getAllEquipments;