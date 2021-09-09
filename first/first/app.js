//const http = require('http');
//
//const hostname = "127.0.0.1";
//const port = 3000;
//
//const server = http.createServer((req, res) => {
//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/plain');
//    res.end('Hello Aston ! Bonnes fetes tout le monde');
//})
//
//server.listen(port, hostname, () => {
//    console.log('Server running');
//})

const express = require('express');
const app = express();
const port = 3000;

// Pour "comprendre" le JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Création route
app.get('/', (req, res) => {
    res.status(200).send('Hello les loulous');
});

// Création route/test
app.get('/test', (req, res) => {
    res.status(200).send('Le test fonctionne');
})

// Création Post // Get parameters
app.post('/add', (req, res) => {
    console.log(req.body);
    const params = req.body;
    res.status(201).json({ "message": "ça marche !" });
})

// With Router and Controller
const userRouter = require('./route/user');
app.use('/users', userRouter);

// Running server
app.listen(port, () => {
    console.log('Server running');
})