const dgram = require('dgram');

const server = dgram.createSocket('udp4');
const address = '192.168.100.6';
const port = 3000;
const broadcastAddress = '192.168.100.255';

server.bind(port, address, () => {
    server.setBroadcast(true);
    console.log(`UDP server running on ${address}:${port}`);
});

setInterval(() => {
    let date = new Date();
    let currentTime = new Buffer(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    server.send(currentTime, port, broadcastAddress);
}, 1000);
