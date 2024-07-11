const {
	ctrlWrapper
} = require('../../decorators');

// const getAllEquipments = require("./getAllEquipments");
const login = require("./login");
const signup = require("./signup");
const getCurrent = require("./getCurrent");
const logout = require("./logout");

module.exports = {
	signup: ctrlWrapper(signup),
	login: ctrlWrapper(login),
	getCurrent: ctrlWrapper(getCurrent),
	logout: ctrlWrapper(logout),
	// getAllEquipments: ctrlWrapper(getAllEquipments),
}