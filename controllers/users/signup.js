const bcrypt = require("bcrypt")

const { HttpError } = require("../../helpers");
const { User } = require("../../models");

const { TEACHER_ID } = process.env;

const signup = async (req, res) => {
	const { name, email, password, teacherId } = req.body;

	if (teacherId !== TEACHER_ID) {
		throw HttpError(400, "Incorrect teacher id")
	}

	const user = await User.findOne({ email });
	if (user) {
		throw HttpError(409, "Email already in use");
	}

	const hashPassword = await bcrypt.hash(password, 10)

	const newUser = await User.create({
		name,
		email,
		password: hashPassword
	});

	res.status(201).json({
		name: newUser.name,
		email: newUser.email
	})
}

module.exports = signup;