const fs = require("fs/promises");

const { Equipment } = require("../../models");
const { cloudinary } = require("../../helpers");

const addNewEquipment = async (req, res) => {
	const { _id: owner } = req.user;
	const arrayOfOldPaths = req.files.map(file => file.path);

	const arrayOfPhotosData = await Promise.all(arrayOfOldPaths.map(async (path) => {
		const {public_id: title, url} = await cloudinary.uploader.upload(path,
			{
				folder: "equipment-site"
			})
		
		await fs.unlink(path)

		return {title, url};

	}))

	const addedEquipment = await Equipment.create({ ...req.body, photos: arrayOfPhotosData, owner});
	res.status(201).json(addedEquipment);
}

module.exports = addNewEquipment;

// {
//     "category": "pressing",
// 	"model": "UWDRW0867",
// 	"photos": ["penis", "jopa"],
// 	"features": "Обороты: 4000 м/с \n Потужність двигуна: 40 кВт",
// 	"describe": "super cool"
// }