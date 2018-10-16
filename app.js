const path = require('path');
const jsonServer = require('json-server');
//const express = require('express');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
//const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

console.log(middlewares[1]);

server.use(middlewares);

server.get('/vehicles', (req, res) => {
    res.jsonp(req.query);
});

//server.use(middlewares.serveStatic('public'))
//server.use('/', express.static(path.join(__dirname, 'static')));

//server.get('/', (req, res) => res.sendFile('index.html'));



server.use(router);
server.listen(3000, () => {
    console.log('JSON server app listening on port 3000!');
});

/*

const path = require('path');



// app.get('/', (req, res) => res.send('Hello World!!!'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))
*/
