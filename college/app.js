const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


// Import Router
const classeRouter = require('./routes/classe');
const eleveRouter = require('./routes/eleve');
const matiereRouter = require('./routes/matiere');
const noteRouter = require('./routes/note');

app.use('/classes', classeRouter);
app.use('/eleves', eleveRouter);
app.use('/matieres', matiereRouter);
app.use('/notes', noteRouter);

app.listen(port, () => {
    console.log('Server running');
})

module.exports = app;