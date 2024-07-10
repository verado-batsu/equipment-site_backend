const express = require("express");

const {
	signup
} = require('../../controllers/users')
const { userRegisterSchema } = require('../../schemas/users');
const { validateBody } = require("../../decorators");

const router = express.Router()

router.post('/signup', validateBody(userRegisterSchema), signup)

module.exports = router;