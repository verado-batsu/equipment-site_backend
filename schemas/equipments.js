const Joi = require("joi");

const { categories } = require('../constants/equipments')

const equipmentAddSchema = Joi.object({
	category: Joi.string().valid(...categories).required(),
	model: Joi.string().required(),
	features: Joi.string().required(),
	describe: Joi.string(),
})

	/* 
		"category": "pressing",
		"model": "C410",
		"photos": ["penis", "jopa"],
		"features": "Обороты: 4000 м/с \n Потужність двигуна: 40 кВт",
		"describe": "super cool"
	*/


module.exports = {
	equipmentAddSchema,
}