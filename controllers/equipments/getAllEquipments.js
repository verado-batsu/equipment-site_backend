const { Equipment } = require("../../models");
const { HttpError } = require("../../helpers");

const { categories } = require("../../constants/equipments");

const getAllEquipments = async (req, res) => {
	const { page = 1, limit = 10, category = ""} = req.query;
	// if (category && q) {
	// 	throw HttpError(400, `It is not allowed to use "category" and "q" at the same time.`)
	// }
	if (category && !categories.some(value => value === category)) {
		throw HttpError(400, `Category "${category}" doesn't exist`)
	}

	const skip = (page - 1) * limit;

	let equipments;
	if (category) {
		equipments = await Equipment.find({ category }, "", { skip, limit }).populate("owner", "name");
	} else {
		equipments = await Equipment.find({}, "", { skip, limit }).populate("owner", "name");
	}
	
	// if (category) {
	// 	equipments = await Equipment.find({ category }, "", { skip, limit }).populate("owner", "name");
	// } else if (q){
	// 	equipments = await Equipment.find({ $text: { $search: q }}, "", { skip, limit }).populate("owner", "name");
	// }
	
	// const total = await Equipment.where({}).countDocuments();
	// console.log(total)

	res.json(equipments);
}

module.exports = getAllEquipments;