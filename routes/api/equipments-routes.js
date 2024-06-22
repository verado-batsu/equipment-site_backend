const express = require('express')

const router = express.Router()

router.get("/", (req, res) => {
	res.json([{
		title: 'Avatar'
	}]);
})

router.get("/:id", (req, res) => {
	res.json({
		title: 'M410'
	});
})

module.exports = router;