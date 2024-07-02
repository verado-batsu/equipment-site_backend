const mongoose = require('mongoose');

const app = require('./app');

const DB_HOST = 'mongodb+srv://Verado:cPBwr79f4TwWxBhx@cluster0.jzzllb2.mongodb.net/equipment-site?retryWrites=true&w=majority&appName=Cluster0'
// cPBwr79f4TwWxBhx

mongoose.connect(DB_HOST)
	.then(() => {
		app.listen(3000);
	})
	.catch(error => {
		console.log(error.message);
		process.exit(1);
	})
