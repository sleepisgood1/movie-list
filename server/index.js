const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const db = require('../database')
const controller = require('./controller/movies.js')

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

app.use(express.json())

app.get('/api/movies', controller.get)
app.post('/api/movies', controller.post)
