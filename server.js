const net = require('net');


const port = 8080
// Create a server instance
const server = net.createServer( (socket) => {
    console.log('Client connected');

    // Receiving data from the client
    socket.on('data', (data) => {
        console.log('Message from client: ' + data.toString());
        
        // Respond to the client
        socket.write('I received: '+ data.toString());
    });

    // Handle client disconnect
    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

// Bind server to port 8080
server.listen(8080, () => {
    console.log('TCP server listening on port 8080');
});
