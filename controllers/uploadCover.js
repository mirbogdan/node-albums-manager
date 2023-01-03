const path = require("path");

const uploadCover = async (req, res) => {
  const coverToUpload = req.files.cover.name;
  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${coverToUpload}`
  );
  await req.files.cover.mv(imagePath);

  return res.status(200).json({ image: { src: `/uploads/${coverToUpload}` } });
};

module.exports = { uploadCover };
