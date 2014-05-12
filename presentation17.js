
var net = require('net');
var fs = require('fs');

rs = fs.createReadStream('./presentation17.js');

net.createServer(function (socket) {
    rs.pipe(socket);

    socket.pipe(process.stdout);
}).listen('/tmp/streams-presentation.sock');

process.on('SIGINT', function () {
    fs.unlink('/tmp/streams-presentation.sock', function () {});
    process.exit();
});

// echo "hello nodejs vienna" | nc -U /tmp/streams-presentation.sock
//
