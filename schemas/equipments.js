const Joi = require("joi");

const equipmentAddSchema = Joi.object({
	category: Joi.string().required(),
	model: Joi.string().required(),
	photos: Joi.array().items(Joi.string()),
	features: Joi.string().required(),
	describe: Joi.string(),
})