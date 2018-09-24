import Test from '~/src/moduleTest';

const io = require('socket.io-client')('localhost:3456');

function abc() {
  console.log(Test);
}

abc();

io.emit('data', 123);
