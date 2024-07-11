const express = require("express");

const {
	signup,
	login,
	getCurrent,
	logout
} = require('../../controllers/users')
const { userRegisterSchema, userLoginSchema } = require('../../schemas/users');
const { validateBody } = require("../../decorators");
const { authenticate } = require("../../middlewares");

const router = express.Router()

router.post('/signup', validateBody(userRegisterSchema), signup)

router.post('/login', validateBody(userLoginSchema), login)

router.get('/current', authenticate, getCurrent)

router.post('/logout', authenticate, logout)

module.exports = router;