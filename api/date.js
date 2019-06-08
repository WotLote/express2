const express = require('express');
const helmet = require('helmet');
const moment = require('moment');

const app = express();

app.use(helmet());

app.get('/', (req, res) => {
  res.status(200);
});

module.exports = app;
