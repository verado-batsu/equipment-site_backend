const Joi = require("joi");

const { categories } = require('../constants/equipments')

const equipmentAddSchema = Joi.object({
	category: Joi.string().valid(...categories).required(),
	model: Joi.string().required(),
	features: Joi.array().items(Joi.string()).required(),
	describe: Joi.string(),
})


module.exports = {
	equipmentAddSchema,
}