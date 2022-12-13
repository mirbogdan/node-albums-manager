const Album = require("../models/albums");

const addAlbum = async (req, res) => {
  try {
    const album = await Album.create(req.body);
    res.status(201).json({ album });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getAllAlbums = (req, res) => {
  res.send("All Albums here");
};

const getAlbum = (req, res) => {
  const id = req.params.id;
  res.send(`Album with id: ${id} here!`);
};

const updateAlbum = (req, res) => {
  res.send(`Updating album with id: ${req.params.id}!`);
};

const deleteAlbum = (req, res) => {
  res.send(`Deleting album with id: ${req.params.id}!`);
};

module.exports = { getAllAlbums, getAlbum, addAlbum, updateAlbum, deleteAlbum };
