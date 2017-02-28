const dgram = require('dgram');

const client = dgram.createSocket('udp4');

client.bind(3000);

client.on('message', (msg) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Current time: ${msg.toString()}`);
});

process.on('SIGINT', () => {
    client.close();
    console.log('\nConnection closed');
});
