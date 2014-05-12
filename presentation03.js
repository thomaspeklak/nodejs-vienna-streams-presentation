
net.createServer(function (socket) {
    socket.on('data', function (data) {
        doStuff();
    });

    socket.on('end', function () {
        endSocket();
    })
});
