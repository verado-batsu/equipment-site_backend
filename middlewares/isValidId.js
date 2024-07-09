const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
	const { equipmentId } = req.params;
	if (!isValidObjectId(equipmentId)) {
		next(HttpError(404, `${equipmentId} invalid id format`))
	}
	next();
}

module.exports = isValidId;