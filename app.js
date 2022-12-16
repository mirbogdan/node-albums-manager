const express = require("express");
const app = express();
const albums = require("./routes/albums");
const connectDB = require("./db/connect");
require("dotenv").config();
//middleware
app.use(express.json());
app.use(express.static("./public"));

//routes
app.use("/api/v1/albums", albums);

//app.get('/api/v1/albums') - get all albums
//app.post('/api/v1/albums') - create a new album
//app.get('/api/v1/albums/:id') - get a single album
//app.patch('/api/v1/albums/:id') - update album
//app.delete('/api/v1/albums/:id') - delete a single album

const port = 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server listening on port ${port}....`));
  } catch (err) {
    console.log(err);
  }
};
start();
