var host = '192.168.100.8', port = 3000;
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.bind(port, host);

server.on('listening', function() {
    console.log('UDP server running on ' + host + ':' + port);
    server.setBroadcast(true);
});

server.on('message', function(msg, rinfo) {
    var date = new Date();
    var currentTime = new Buffer(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    server.send(currentTime, 0, currentTime.length, rinfo.port, rinfo.address);
});
