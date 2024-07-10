const { HttpError } = require("../../helpers");
const { User } = require("../../models");

const signup = async (req, res) => {
	const { name, email, password, teacherId } = req.body;
	const { TEACHER_ID } = process.env;
	if (teacherId !== TEACHER_ID) {
		throw HttpError(400, "Incorrect teacher id")
	}

	const user = await User.findOne({ email });
	if (user) {
		throw HttpError(409, "Email already in use");
	}

	const newUser = await User.create({
		name,
		email,
		password
	});

	res.status(201).json({
		name: newUser.name,
		email: newUser.email
	})
}

module.exports = signup;