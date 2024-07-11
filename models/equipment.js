const { Schema, model } = require("mongoose");

const { categories } = require('../constants/equipments');
const { handleMongooseError } = require("../helpers")

const equipmentSchema = new Schema({
	category: {
		type: String,
		enum: categories,
		required: true,
	},
	model: {
		type: String,
		required: true,
	},
	photos: {
		type: [String],
	},
	features: {
		type: String,
		required: true,
	},
	describe: {
		type: String,
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: "user",
		required: true,
	},
}, { versionKey: false, timestamps: true })

equipmentSchema.post("save", handleMongooseError)

const Equipment = model("equipments", equipmentSchema)

module.exports = Equipment;