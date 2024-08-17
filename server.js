const express = require('express');
import { Cube } from './cube.js';
const app = express();


const cube = new Cube(5);

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.get('/cube', (req, res) => {
    res.send('Cube' + cube.getSurfaceArea());
});


app.listen(3000, () => console.log('Example app is listening on port 3000.'));
