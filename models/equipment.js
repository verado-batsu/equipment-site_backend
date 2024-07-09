const { Schema, model } = require("mongoose");

const equipmentSchema = new Schema({
	category: String,
	model: String,
	photos: Joi.array().items(Joi.string()),
	features: String,
	describe: String,
})

const Equipment = model("equipment", equipmentSchema)

module.exports = Equipment;