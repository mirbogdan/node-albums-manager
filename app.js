const express = require("express");
const app = express();
// const tasks = require("./routes/tasks");

//middleware
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("<h1>Task manager app</h1>");
});

// app.use("/api/v1/tasks", tasks);
//app.get('/api/v1/tasks')
//app.post('/api/v1/tasks')
//app.get('/api/v1/tasks/:id')
//app.patch('/api/v1/tasks/:id')
//app.delete('/api/v1/tasks/:id')

const port = 4000;
app.listen(port, console.log(`server listening on port ${port}....`));
