const fs = require("fs/promises");

const { Equipment } = require("../../models");
const { HttpError, cloudinary } = require("../../helpers");

const updateEquipmentbyId = async (req, res) => {
	const { _id: owner } = req.user;
	const { equipmentId } = req.params;
	
	// const equipment = await Equipment.findById(equipmentId);
	// if (!equipment) {
	// 	throw HttpError(404);
	// }
	// if (String(equipment.ownerId) !== String(ownerId)) {
	// 	throw HttpError(403, `Equipment doesn't belong to this account`);
	// }

	const oldEquipment = await Equipment.findById(equipmentId)
	if (!oldEquipment) {
		throw HttpError(404);
	}

	let updatedEquipment;
	if (req.files) {
		const arrayOfOldPaths = req.files.map(file => file.path);
		
		oldEquipment.photos.forEach(async (photo) => {
			await cloudinary.uploader.destroy(photo.title)
		})

		const arrayOfPhotosData = await Promise.all(arrayOfOldPaths.map(async (path) => {
			const {public_id: title, url} = await cloudinary.uploader.upload(path,
				{
					folder: "equipment-site"
				})
			
			await fs.unlink(path)

			return {title, url};
		}))

		updatedEquipment = await Equipment.findByIdAndUpdate(equipmentId, {...req.body, photos: arrayOfPhotosData, owner}, { new: true })
	} else {
		updatedEquipment = await Equipment.findByIdAndUpdate(equipmentId, {...req.body, owner}, { new: true })
	}

	res.json(updatedEquipment)
}

module.exports = updateEquipmentbyId;