var host = '192.168.100.8', port = 6001;
var dgram = require('dgram');
var client = dgram.createSocket('udp4');

client.bind(port, host);

var message = new Buffer('');
client.send(message, 0, message.length, 3000, '192.168.100.4');

client.on('message', function(msg, remote) {
    console.log('Message recieved from ' + remote.address + ':' + remote.port);
    console.log('Current time: ' + msg.toString());
});
