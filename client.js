const host = '192.168.100.4';
const port = 6001;
const dgram = require('dgram');
const client = dgram.createSocket('udp4');

client.bind(port, host);

client.on('listening', () => {
    sendRequest = setInterval(() => {
        var msg = new Buffer('');
        client.send(msg, 0, msg.length, 3000, '192.168.100.8');
    }, 1000);
});

client.on('message', (msg) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Current time: ${msg.toString()}`);
});

process.on('SIGINT', () => {
    clearInterval(sendRequest);
    client.close();
});

client.on('close', () => {
    console.log('\nConnection closed');
});
