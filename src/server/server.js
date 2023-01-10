require('dotenv').config();
const express = require('express');
const routes = require('../routes/index')

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

// routes
routes(app)



