const app = require('express')();
const http = require('http').createServer(app);
const bodyParser = require('body-parser'); 

const PORT = 4000;
app.use(bodyParser.json());

const io = require('socket.io')(http, {
    cors: {
        origin: "*"
    }
});

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome To Connection ...');
})

app.put('/createUser', (req, res) => {
    console.log(req.body);
    res.status(201);
    res.send("Otp Sent...")
})

// io.on('connection', (socket) => {
//     console.log('new client connected on docket : ', socket.id);
//     socket.emit('connection', null);
//     socket.on('chat', function ({ name, message }) {
//         io.sockets.emit('chat', { name, message });
//     })
// });