
var socket = null;

/**
 * initialises socket io connection
 */
window.onload = function () {
    console.log('onload');
    socket = io();
};

/**
 * sends color array via socket io connection
 */
function sendData() {
    var colors = getColors();
    console.log('Sending colors: ',colors);
    socket.emit('data',colors);
}

/**
 * gets colors from input boxes
 * @returns {Array}
 */
function getColors() {
    colors = [];
    var dat1 = document.getElementById('data1').value;
    colors.push(dat1);
    var dat2 = document.getElementById('data2').value;
    colors.push(dat2);
    var dat3 = document.getElementById('data3').value;
    colors.push(dat3);
    var dat4 = document.getElementById('data4').value;
    colors.push(dat4);
    var dat5 = document.getElementById('data5').value;
    colors.push(dat5);
    return colors;
}