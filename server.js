/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const cors = require('cors');
const State = require('./abletools/State');
const validOptions = require('./abletools/validOptions.json');

const app = express();

app.use(cors({}));

app.get('', (_req, res) => {
  res.send('hello');
});

app.get('/api/getState', (_req, res) => {
  res.json(State.make());
});

app.get('/api/getValidOptions', (_req, res) => {
  res.json(validOptions);
});

const port = process.env.PORT || 6633;
app.listen(port, () => console.log(`http://localhost:${port}`));
