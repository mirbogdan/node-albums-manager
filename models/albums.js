const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must provide a title"],
    trim: true,
    maxLength: [40, "title can not be more than 40 characters"],
  },
  artist: {
    type: String,
    required: [true, "must provide an artist name"],
    trim: true,
    maxLength: [40, "title can not be more than 40 characters"],
  },
  acquired: { type: Boolean, default: false },
});

module.exports = mongoose.model("Album", AlbumSchema);
