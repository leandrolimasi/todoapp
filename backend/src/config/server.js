const bodyParser = require('body-parser');
const express = require('express');

const server = express();
const port = 3003;

const allowCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function () {
    console.log(`sever running on port ${port}.`);
});

module.exports = server;