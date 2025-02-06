const cloudinary = require("../config/cloudnary");

const uploadImage = async (filePath) => {
  try {
    const uploadedImage = await cloudinary.uploader.upload(filePath);
    return {
      url: uploadedImage.secure_url,
      publicId: uploadedImage.public_id,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to upload image");
  }
};

module.exports = uploadImage;
