"use strict";
exports.__esModule = true;
var http = require("http");
var server = http.createServer(function (req, res) {
    console.log(req.url);
    if (req.url === '/') {
        res.write('INDEX ALV');
    }
    else if (req.url === '/test') {
        res.write('test page under construction');
    }
    // res.write('Holi to my api exaple with http modul')
    res.end();
});
server.listen(3030);
