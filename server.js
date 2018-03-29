const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`listing on ${PORT}`);
})
