var host = "127.0.0.1", port = 33334;
var dgram = require( "dgram" );
var client = dgram.createSocket( "udp4" );

client.on( "message", function( msg, rinfo ) {
    console.log('Current time: ' + msg.toString());
});

client.bind(port, host);

var message = new Buffer('');
client.send(message, 0, message.length, 33333, '127.0.0.1');
