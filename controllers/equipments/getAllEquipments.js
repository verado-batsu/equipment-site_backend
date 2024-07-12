const { Equipment } = require("../../models");
const { HttpError } = require("../../helpers");

const { categories } = require("../../constants/equipments");

const getAllEquipments = async (req, res) => {
	const { page = 1, limit = 10, category = "rolling" } = req.query;
	if (!categories.some(value => value === category)) {
		throw HttpError(400, `Category "${category}" doesn't exist`)
	}

	const skip = (page - 1) * limit;
	const equipments = await Equipment.find({ category }, "", { skip, limit }).populate("owner", "name");

	
	// const total = await Equipment.where({}).countDocuments();
	// console.log(total)

	res.json(equipments);
}

module.exports = getAllEquipments;