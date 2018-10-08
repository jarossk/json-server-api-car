const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
// const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/', (req, res) => {
    res.jsonp(req.query);
});

server.use(router);
server.listen(3000, () => {
    console.log('JSON server is runnung');
});

/*
const express = require('express')
const app = express()
const path = require('path');

// app.use(express.static('public'))
//app.use('/', express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => res.sendFile('index.html'))

// app.get('/', (req, res) => res.send('Hello World!!!'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))
*/
