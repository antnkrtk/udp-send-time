var host = '192.168.100.4', port = 3000;
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.bind(port, host);

console.log('UDP server running on ' + host + ':' + port);

server.on('listening', function() {
    server.setBroadcast(true);
});

server.on('message', function(msg, remote) {
    console.log('Recieved a message from ' + remote.address + ':' + remote.port + '. Message: ' + msg);
    var date = new Date();
    var currentTime = new Buffer(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    server.send(currentTime, 0, currentTime.length, remote.port, remote.address);
});
