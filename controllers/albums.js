const getAllAlbums = (req, res) => {
  res.send("All Albums here");
};

const getAlbum = (req, res) => {
  const id = req.params.id;
  res.send(`Album with id: ${id} here!`);
};

const addAlbum = (req, res) => {
  res.send(`Album added! This is response: ${JSON.stringify(req.body)}`);
};

const updateAlbum = (req, res) => {
  res.send(`Updating album with id: ${req.params.id}!`);
};

const deleteAlbum = (req, res) => {
  res.send(`Deleting album with id: ${req.params.id}!`);
};

module.exports = { getAllAlbums, getAlbum, addAlbum, updateAlbum, deleteAlbum };
