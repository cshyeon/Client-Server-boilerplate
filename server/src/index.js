const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.listen(3456, () => {
  console.log('server is running on 3456 port');
});
