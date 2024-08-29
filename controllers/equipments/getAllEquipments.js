const { Equipment } = require("../../models");
const { HttpError } = require("../../helpers");

const { categories } = require("../../constants/equipments");

const getAllEquipments = async (req, res) => {
	const { page = 1, limit = 10, category = "", q = ""} = req.query;
	if (category && !categories.some(value => value === category)) {
		throw HttpError(400, `Category "${category}" doesn't exist`)
	}

	const skip = (page - 1) * limit;

	let equipments;
	if (category && q) {
		equipments = await Equipment.find({ category, model: { $regex: q, $options: "i" } }, "", { skip, limit }).populate("owner", "name");
	} else if (category) {
		equipments = await Equipment.find({ category }, "", { skip, limit }).populate("owner", "name");
	} else if (q) {
		equipments = await Equipment.find({ model: { $regex: q, $options: "i" } }, "", { skip, limit }).populate("owner", "name");
	} else {
		equipments = await Equipment.find({}, "", { skip, limit }).populate("owner", "name");
	}
	
	const total = await Equipment.where({ category }).countDocuments();

	res.json({equipments, total});
}

module.exports = getAllEquipments;