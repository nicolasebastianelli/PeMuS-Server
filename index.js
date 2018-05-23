var express = require('express');

var app = express();

var port= 3000;

var srv = app.listen(port, function() {
    console.log('Listening on '+port)
});

app.use('/peerjs', require('peer').ExpressPeerServer(srv, {
    allow_discovery: true,
    debug: true
}));