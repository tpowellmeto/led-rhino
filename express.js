/*
 * Runs the node.js server on port 3000
 * Serves files in the ./public directory
 * listens for incoming socket.io connections with color arrays on the 'data' channel
 */

//init
var LEDS = require('./leds.js');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//serves the standard page.
app.use('/', express.static(__dirname + '/public'));

//client - server comms
io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('data', function(msg) {
        LEDS.draw(msg);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});


/*
 * Listens for incoming connections on port 3000
 */
http.listen(3000, function(){
    console.log('listening on *:3000');
});