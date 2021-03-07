const app = require('express')();
const http = require('http').createServer(app);
const PORT = 4000;
const io = require('socket.io')(http, {
    cors: {
        origin: "*"
    }
});
http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// io.on('connection', (socket) => {
//     console.log('new client connected on docket : ', socket.id);
//     socket.emit('connection', null);
//     socket.on('chat', function ({ name, message }) {
//         io.sockets.emit('chat', { name, message });
//     })
// });