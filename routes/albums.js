const express = require("express");
const router = express.Router();
const {
  getAllAlbums,
  getAlbum,
  addAlbum,
  updateAlbum,
  deleteAlbum,
} = require("../controllers/albums");

// router.get("/", getAlbums);
// router.post("/", addAlbum);
// router.get("/:id", getAlbum);
// route.patch("/:id", updateAlbum);
// route.delete("/:id", deleteAlbum);

router.route("/").get(getAllAlbums).post(addAlbum);
router.route("/:id").get(getAlbum).patch(updateAlbum).delete(deleteAlbum);

module.exports = router;
