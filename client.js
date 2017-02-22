var host = '192.168.100.4', port = 6001;
var dgram = require('dgram');
var client = dgram.createSocket('udp4');

client.bind(port, host);

client.on('listening', function() {
    sendRequest = setInterval(function() {
        var msg = new Buffer('');
        client.send(msg, 0, msg.length, 3000, '192.168.100.8');
    }, 1000);
});

client.on('message', function(msg) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write('Current time: ' + msg.toString());
});

process.on('SIGINT', function() {
    clearInterval(sendRequest);
    client.close();
});

client.on('close', function() {
    console.log('\nConnection closed');
});
