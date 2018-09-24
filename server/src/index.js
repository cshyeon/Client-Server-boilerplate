const io = require('socket.io')(3456);

io.on('connection', (socket) => {
  console.log('client connected');
  socket.on('data', (data) => {
    console.log(data);
    io.emit('message', data);
  });
});

console.log('server started at port 3456');
