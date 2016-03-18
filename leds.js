
const NUM_PIXELS = 100;
const DATA_PIN = 6;

var five = require("johnny-five");
var pixel = require("node-pixel");

var opts = {};
//opts.port = process.argv[2] || "";
opts.port = '/dev/cu.usbmodem1421';

var board = new five.Board(opts);
var strip = null;

board.on("ready", function() {

    console.log("Board ready, lets add light");

    strip = new pixel.Strip({
        pin: DATA_PIN,         // # pin pixels connected to
        length: NUM_PIXELS,     // number of pixels in the strip
        board: this,
        controller: "FIRMATA"
    });

    strip.on("ready", function() {
        console.log("Strip ready, let's go");
        strip.color('#000000');
        strip.show();
        //draw data to pixels here
    });

});

module.exports = {

    draw: function (colorArray) {
        var index = 0;
        colorArray.forEach(function (color) {
            strip.pixel(index).color(color);
            index++;
        });
        strip.show();
    }

};