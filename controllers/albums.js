const Album = require("../models/albums");

const addAlbum = async (req, res) => {
  try {
    const album = await Album.create(req.body);
    res.status(201).json({ album });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find();
    res.status(200).json({ albums });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getAlbum = async (req, res) => {
  try {
    const _id = req.params.id;
    const album = await Album.findOne({ _id });
    //show different statuses and error msg for an valid id but not in database
    if (!album) {
      return res.status(404).json({ msg: `no album with id: ${_id}` });
    }
    res.status(200).json({ album });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteAlbum = async (req, res) => {
  try {
    const _id = req.params.id;
    const albumToDelete = await Album.findOneAndDelete({ _id });
    if (!albumToDelete) {
      return res
        .status(404)
        .json({ msg: `no album with id: ${_id} to be deleted` });
    }
    res.status(200).json({ albumToDelete });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateAlbum = async (req, res) => {
  try {
    const _id = req.params.id;
    const albumToUpdate = await Album.findOneAndUpdate({ _id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!albumToUpdate) {
      return res
        .status(404)
        .json({ msg: `no album with id: ${_id} was found` });
    }
    res.status(200).json({ albumToUpdate });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = { getAllAlbums, getAlbum, addAlbum, updateAlbum, deleteAlbum };
