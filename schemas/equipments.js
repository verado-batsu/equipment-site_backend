const Joi = require("joi");

const { categories } = require('../constants/equipments')

const equipmentAddSchema = Joi.object({
	category: Joi.string().valid(...categories).required(),
	typeOfEquipment: Joi.string().required(),
	model: Joi.string().required(),
	mainFeature: Joi.string().required(),
    valueOfMainFeature: Joi.number(),
	features: Joi.array().items(Joi.string()).required(),
	describe: Joi.string(),
})


module.exports = {
	equipmentAddSchema,
}