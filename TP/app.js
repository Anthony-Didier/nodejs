const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const taskRouter = require('./route/task');
app.use('/tasks', taskRouter);

app.listen(port, () => {
    console.log('Server running');
})