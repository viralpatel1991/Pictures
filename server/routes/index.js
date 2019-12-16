require('dotenv').config()
const routes = require('express').Router();
const characters = require('./characters');

routes.use('/characters', characters);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
