var host = "127.0.0.1", port = 33333;
var dgram = require( "dgram" );
var server = dgram.createSocket( "udp4" );

console.log('UDP server running on ' + host + ':' + port);

server.on( "message", function(msg, remote) {
    console.log('Recieved a message from ' + remote.address + ':' + remote.port + '. Message: ' + msg);
    var date = new Date();
    var currentTime = new Buffer(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    server.send(currentTime, 0, currentTime.length, remote.port, remote.address);
});

server.bind(port, host);
