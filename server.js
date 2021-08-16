'use strict'
const express = require('express')
const server = express()
const handel404error = require('./handlers/404.js')
const handel500error = require('./handlers/500.js')
//LISTEFUN
function start(port) {
    server.listen(port, () => console.log(`Server started on port ${port}`));
}
//route
// http://localhost:3002/
server.get('/', handelerhome)

// http://localhost:3002/data
server.get('/data', handelerdata)

// http://localhost:3002/bad
server.get('/bad', handerlbad)

function handelerhome(req, res) {
    res.status(200).send('all good 😎')
}
function handelerdata(req, res) {
    const myinfo = {
    smile: '🤗',
        name: "eman mkhareez",
        age: "23",
        gender: "femal"
    }
    res.status(200).json(myinfo)
}

function handerlbad(req, res, next) {
    next('error from bad end point');
}



server.use('*', handel404error)
server.use(handel500error)

module.exports = {
    start,
    server,
}