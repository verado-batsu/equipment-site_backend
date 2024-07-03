const { Contact } = require("../../models");

const getAllContacts = async (req, res) => {
	const { _id: owner } = req.user;
	const { page = 1, limit = 10, ...query } = req.query;
	const skip = (page - 1) * limit;
	const contacts = await Contact.find({owner, ...query}, '', {skip, limit});
	res.json(contacts);
}

module.exports = getAllContacts;