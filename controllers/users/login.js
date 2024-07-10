const bcrypt = require("bcrypt")

const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const login = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (!user) {
		throw HttpError(401);
	}

	const passwordCompare = await bcrypt.compare(password, user.password)
	if (!passwordCompare) {
		throw HttpError(401);
	}

	const token = "3243214.4df4wed23.3exc213e12e";

	res.json({
		token,
	})
}

module.exports = login;