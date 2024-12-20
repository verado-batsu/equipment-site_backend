const { Schema, model } = require("mongoose");

const { categories } = require('../constants/equipments');
const { handleMongooseError } = require("../helpers")

const equipmentSchema = new Schema({
	category: {
		type: String,
		enum: categories,
		required: true,
	},
	typeOfEquipment: {
		type: String,
		required: true,
	},
	model: {
		type: String,
		required: true,
	},
	mainFeature: {
		type: String,
		required: true,
	},
	valueOfMainFeature: {
		type: Number,
		default: null, 
	},
	photos: {
		type: [{
			title: String,
			url: String,
		}],
	},
	features: {
		type: [String],
		required: true,
	},
	describe: {
    type: String,
    default: "",
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