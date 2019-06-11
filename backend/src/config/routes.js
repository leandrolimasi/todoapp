const express = require('express');

module.exports = function (server) {

    //general api router
    const router = express.Router();
    server.use('/api', router);

    //todo endpoint
    const todoService = require('../api/todo/todoService');
    todoService.register(router, '/todos')
}