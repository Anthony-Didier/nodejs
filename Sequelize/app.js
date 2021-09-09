const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const giftRouter = require('./routes/gift');
const humanRouter = require('./routes/human');
const locomotionRouter = require('./routes/locomotion');
const bucheRouter = require('./routes/buche');
app.use('/gifts', giftRouter);
app.use('/humans', humanRouter);
app.use('/locomotions', locomotionRouter);
app.use('/buches', bucheRouter);

app.listen(port, () => {
    console.log('Server running');
})