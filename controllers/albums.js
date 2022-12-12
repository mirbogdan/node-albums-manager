const getAllAlbums = (req, res) => {
  res.send("All Albums here");
};

const getAlbum = (req, res) => {
  const id = req.params.id;
  res.send(`Album with id: ${id} here!`);
};

const addAlbum = (req, res) => {
  res.send("Album added!");
};

const updateAlbum = (req, res) => {
  res.send("Updating album!");
};

const deleteAlbum = (req, res) => {
  res.send("Deleting album!");
};

module.exports = { getAllAlbums, getAlbum, addAlbum, updateAlbum, deleteAlbum };
