const express = require('express');
const routers = require('./routers');

// ...

const app = express();

app.use(express.json());
app.use(routers);

// ... 

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
