var express = require('express');

var app = express();

var port=3000;

var srv = app.listen(3000, function() {
    console.log('Listening on '+port)
});

app.use('/peerjs', require('peer').ExpressPeerServer(srv, {
    debug: true
}));