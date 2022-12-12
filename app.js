const express = require("express");
const app = express();
const albums = require("./routes/albums");
// const tasks = require("./routes/tasks");

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("<h1>Vinyl Albums manager app</h1>");
});
app.use("/api/v1/albums", albums);

//app.get('/api/v1/albums') - get all albums
//app.post('/api/v1/albums') - create a new album
//app.get('/api/v1/albums/:id') - get a single album
//app.patch('/api/v1/albums/:id') - update album
//app.delete('/api/v1/albums/:id') - delete a single album

const port = 4000;
app.listen(port, console.log(`server listening on port ${port}....`));
