const { Schema, model } = require("mongoose");

const { emailRegexp } = require('../constants/users');
const { handleMongooseError } = require("../helpers")

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		match: emailRegexp,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		minlength: 6,
		required: true,
	},
	token: {
		type: String,
	}
}, { versionKey: false, timestamps: true })

userSchema.post("save", handleMongooseError)

const User = model("user", userSchema)

module.exports = User;