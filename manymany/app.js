const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


// Import Router
const singerRouter = require('./routes/singer');
const styleRouter = require('./routes/style');


app.use('/singers', singerRouter);
app.use('/styles', styleRouter);


app.listen(port, () => {
    console.log('Server running');
})