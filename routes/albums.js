const express = require("express");
const router = express.Router();
const {
  getAllAlbums,
  getAlbum,
  addAlbum,
  updateAlbum,
  deleteAlbum,
} = require("../controllers/albums");
const { uploadCover } = require("../controllers/uploadCover");

// router.get("/", getAlbums);
// router.post("/", addAlbum);
// router.get("/:id", getAlbum);
// route.patch("/:id", updateAlbum);
// route.delete("/:id", deleteAlbum);

router.route("/").get(getAllAlbums).post(addAlbum);
router.route("/:id").get(getAlbum).patch(updateAlbum).delete(deleteAlbum);
router.route("/uploads").post(uploadCover);

module.exports = router;
