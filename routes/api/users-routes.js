const express = require("express");

const {
	signup,
	login
} = require('../../controllers/users')
const { userRegisterSchema, userLoginSchema } = require('../../schemas/users');
const { validateBody } = require("../../decorators");

const router = express.Router()

router.post('/signup', validateBody(userRegisterSchema), signup)

router.post('/login', validateBody(userLoginSchema), login)

module.exports = router;